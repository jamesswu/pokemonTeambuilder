
// import Stats from "./Stats";
import { Component } from "react";

export default class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        const { pokemon } = this.props;
        if (pokemon) {
            return(
                <div className="searchedPokemon">
                    <div className="pokemon">
                        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
                        <h2>{pokemon.name}</h2>
                    </div>
                    <div className="stats">
                        <div className="statInfo">
                            <p>{pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</p>
                            <p>{pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</p>
                            <p>{pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</p>
                            <p>{pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat}</p>
                            <p>{pokemon.stats[4].stat.name}: {pokemon.stats[4].base_stat}</p>
                            <p>{pokemon.stats[5].stat.name}: {pokemon.stats[5].base_stat}</p>
                        </div>
                        <div className="statBars">
                            <div className="statBar" style={{width:`${pokemon.stats[0].base_stat}px`}}></div>
                            <div className="statBar" style={{width:`${pokemon.stats[1].base_stat}px`}}></div>
                            <div className="statBar" style={{width:`${pokemon.stats[2].base_stat}px`}}></div>
                            <div className="statBar" style={{width:`${pokemon.stats[3].base_stat}px`}}></div>
                            <div className="statBar" style={{width:`${pokemon.stats[4].base_stat}px`}}></div>
                            <div className="statBar" style={{width:`${pokemon.stats[5].base_stat}px`}}></div>
                        </div>
                    </div>
                </div> 
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

// WORK IN PROGRESS
{/* {
    pokemon.stats.map((item,idx) => {
        return (
            <Stats
                key={idx}
                stat={item[idx]}
            ></Stats>
        )
    })
} */}