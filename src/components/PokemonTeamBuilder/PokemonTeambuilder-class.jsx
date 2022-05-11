
import './PokemonTeambuilder.css';
import React, { Component } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import Team from './Team';

/**
 * unable to use useState since i am using classes, however
 * through the use of setState, direct state mutation was avoided
*/
export default class PokemonTeambuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      object: false,
      array: [],
      error: null
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * reset state if the component has successfully mounted
   */
  componentDidMount() {
      this.resetPage();
  }

  /**
   * reset states
   */
  resetPage() {
    const value = '';
    const object = false;
    const array = [];
    const error = null;
    this.setState({ value, object, array, error });
  }

  /**
   * 
   * @param {*} e - event
   * adds searched pokemon to an array that is part of state
   * if team is already at maximum capacity then do not add
   */
  handleAdd(e) {
    e.preventDefault();
    if (this.state.value === "") {
      alert("search for pokemon first");
    } else if (this.state.array.length === 6) {
      alert("team is full");
    } else {
      const temp = this.state.object;
      let arr = this.state.array.slice();
      arr.push(temp);
      this.setState({ array: arr }, () => { });
    }
  }

  /**
   * 
   * @param {*} e - event
   * change of form
   * input is always set to lowercase for api usage
   * since if input is capitialized, the api call is unable
   * to be completed
   */
  handleChange(e) {
    this.setState({
      value: e.target.value.toLowerCase()
    });
  }

  /**
   * 
   * @param {*} e - event
   * api call upon submitting form
   * stores api data inside state
   */
  handleSubmit(e) {
    e.preventDefault();
    axios({
      url: `https://pokeapi.co/api/v2/pokemon/${this.state.value}`,
      method: 'GET',
      responseType: 'json',
    }).then(response => {
      this.setState({ object: response.data });
      if (response.ok) {
      } else {
        throw new Error("something bad went wrong");
      }
    }).catch(err => {
      this.setState({ error: err });
    })
  }

  render() {
    return (
      <div>
        <header>
          <div className="wrapper">
            <h1>Pokemon Teambuilder</h1>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
              </form>
              <span><button onClick={this.handleAdd}>Add</button></span>
            </div>
            <div className="contentContainer">
              <div className="team">
                <h2>Team</h2>
                <div className="teamContainer">
                  {
                    this.state.array.map((item, index) => {
                      return (
                        <Team
                          key={index}
                          name={item.name}
                          sprite={item.sprites.versions['generation-viii'].icons.front_default}
                        ></Team>
                      )
                    })
                  }
                </div>
              </div>
              <div className="search">
                <Pokemon pokemon={this.state.object}></Pokemon>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <p>Created at <a href="https://junocollege.com/">Juno College</a> by <a href="https://github.com/jamesswu">James Wu</a></p>
        </footer>
      </div>
    )
  }
}