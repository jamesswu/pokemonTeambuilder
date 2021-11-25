import { Component } from "react";

export default class Types extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {type} = this.props;
        if (type) {
            return (
                <div className="type">
                    <p>{type}</p>
                </div>
                )
        } else {
            return (
                <div></div>
            )
        }

    }
}