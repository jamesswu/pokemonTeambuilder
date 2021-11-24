
import { Component } from "react";

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        const { name,sprite } = this.props;
        if (name && sprite) {
            return (
                <div className="teamPokemon">
                    <img src={sprite} alt="" />
                    <p>{name}</p>
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }

    }
}