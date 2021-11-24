
import { Component } from "react";
import StatBar from "./StatBar";
import Stats from "./Stats";

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
                    </div>
                    <div className="info">
                        <h2>{pokemon.name}</h2>
                        <div className="stats">
                            <div className="statInfo">
                                {
                                    pokemon.stats.map((item,index) => {
                                        return (
                                            <Stats key={index} stat={item.stat.name} value={item.base_stat}></Stats>
                                        )
                                    })
                                }
                            </div>
                            <div className="statBars">
                                {
                                    pokemon.stats.map((item,index) => {
                                        return (
                                            <StatBar key={index} stat={item.base_stat}></StatBar>
                                        )
                                    })
                                }
                            </div>
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
