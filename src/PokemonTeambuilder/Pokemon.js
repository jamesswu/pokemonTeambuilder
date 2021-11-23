import { Component } from "react";

export default class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        const { pokemon } = this.props;
        return (
            <div>
                <h2>{pokemon.name}</h2>
            </div>
        )
    }
}