
import './PokemonTeambuilder.css';
import React, {Component} from 'react';
import axios from 'axios';

export default class PokemonTeambuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            array: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.resetPage();
    }

    resetPage() {
        const value = '';
        const array = [];
        this.setState({value,array})
    }

    handleChange(e) {
        this.setState({
            value:e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.value);
        axios({
            url: `https://pokeapi.co/api/v2/pokemon/${this.state.value}`,
            method: 'GET',
            responseType: 'json',
        }).then(response => {
            console.log(response);
            this.state.array.push(response);
            console.log(this.state.array);
            if (response.ok) {
                // 
            } else {
                throw new Error("something bad went wrong");
            }
        }).catch((err) => {
        })
        // console.log(this.state.array)
    }
    
    render() {
        return(
            <div>
                <header>
                    <h1>Pokemon Teambuilder</h1>
                </header>
                <main>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </main>
            </div>
        )
    }
}