import { Component } from "react";

export default class StatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {stat} = this.props;
        if (stat) {
            // i could not think of another way to link the size of the
            // div to the value of the element without using inline jsx
            return (
                <div className="statBar" style={{width:`${stat}px`}}></div>
            )
        } else {
            <div></div>
        }

    }
}