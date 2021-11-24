
import { Component } from 'react'

export default class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {stat,value} = this.props;
        if (stat && value) {
            return (
                <div>
                    <p>{stat}: {value}</p>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }

    }
}
