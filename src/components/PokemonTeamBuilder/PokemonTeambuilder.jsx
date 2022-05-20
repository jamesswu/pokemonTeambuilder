
import { useState, useEffect, Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import axios from 'axios';

import PokemonContainer from './PokemonContainer';

export default function PokemonTeambuilder() {
  const [page, setPage] = useState({});
  const [pageNum, setPageNum] = useState(1);
  const [array, setArray] = useState([]);
  // const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [search, setSearch] = useState('');


  // first render
  useEffect(() => {
    getPokemon();
  }, []);

  // // rerender if any changes to page
  // useEffect(() => {
  //   console.log(pageNum);
  // }, [pageNum])


  const getPage = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon?limit=30',
        responseType: 'json'
      });
      return response.data;
    } catch (e) {
      setError(e);
    }
  }

  const getPromise = async (url) => {
    try {
      const response = await axios({
        method: 'GET',
        responseType: 'json',
        url: url
      });
      const data = response.data;
      return data;
    } catch (e) {
      setError(e);
    }
  }

  const getPokemon = async () => {
    setLoading(true);
    let promises = [];
    try {
      const data = await getPage();
      setPage(data);
      data.results.forEach(pokemon => {
        promises.push(getPromise(pokemon.url));
      })
      Promise.all(promises)
        .then(res => {
          console.log(res);
          setArray(prevArray => {
            return [...prevArray, ...res];
          });
          setLoading(false);
        }).catch(e => setError(e));
    } catch (e) {
      console.log(e)
      setError(e);
    }
  }

  const handleSearch = (e) => {

  }

  if (array) {
    return (
      <>
        <div className='team wrapper'></div>
        <div className='mainContainer wrapper'>
          <div className='search'>
            <form>
              <label htmlFor="search" className='visuallyHidden'>Search for Pokemon</label>
              <input
                type='text'
                onChange={handleSearch}
              ></input>
            </form>
          </div>
          <div className='main'>
            hello world
            {
              array.map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <PokemonContainer
                      obj={obj}>
                    </PokemonContainer>
                    <Waypoint onEnter={() => console.log(idx)}></Waypoint>
                  </Fragment>
                )
              })
            }
          </div>
        </div >

      </>
    )
  }
}