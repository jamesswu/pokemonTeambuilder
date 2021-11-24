
import { Component } from "react";
import StatBar from "./StatBar";
import Stats from "./Stats";
import Types from "./Types";

export default class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        // set up prop
        const { pokemon } = this.props;
        // check if this component has rendered before api data successfully sent over
        if (pokemon) {
            return(
                <div className="searchedPokemon">
                    <div className="pokemon">
                        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
                    </div>
                    <div className="info">
                        <div>
                            <h2>{pokemon.name}</h2>
                            <div className="types">
                                {
                                    pokemon.types.map((item,idx) => {
                                        return(
                                            <Types key={idx} type={item.type.name}></Types>
                                        )
                                    }) 
                                }
                            </div>
                        </div>
                        <div className="stats">
                            <div className="statInfo">
                                {
                                    /**
                                     * loop through array and grab stat and name of each element
                                     */
                                    pokemon.stats.map((item,index) => {
                                        return (
                                            <Stats key={index} stat={item.stat.name} value={item.base_stat}></Stats>
                                        )
                                    })
                                }
                            </div>
                            <div className="statBars">
                                {
                                    /**
                                     * loop through the array and grab the stat for the stat bar
                                     */
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
