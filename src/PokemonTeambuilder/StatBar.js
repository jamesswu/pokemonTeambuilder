import { Component } from "react";

export default class StatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {stat} = this.props;
        if (stat) {
            return (
                <div className="statBar" style={{width:`${stat}px`}}></div>
            )
        } else {
            <div></div>
        }

    }
}