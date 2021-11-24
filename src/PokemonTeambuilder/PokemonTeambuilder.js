
import './PokemonTeambuilder.css';
import React, {Component} from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';

export default class PokemonTeambuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            object:false,
            array: [],
            error:null
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.resetPage();
    }

    resetPage() {
        const value = '';
        const object = false;
        const array = [];
        this.setState({value,object,array})
    }

    handleAdd(e) {
        e.preventDefault();
        if (this.state.value ==="") {
            alert("search for pokemon first")
        } else {
            const temp = this.state.object;
            let arr = this.state.array.slice();
            arr.push(temp);
            this.setState({array: arr}, () => {})
        }
    }

    handleChange(e) {
        this.setState({
            value:e.target.value.toLowerCase()
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            url: `https://pokeapi.co/api/v2/pokemon/${this.state.value}`,
            method: 'GET',
            responseType: 'json',
        }).then(response => {
            this.setState({object: response.data});
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("something bad went wrong");
            }
        }).then((jsonData) => {

        }).catch(err => {
            this.setState({error: err});
        })
    }

    render() {
        return(
            <div>
                <header>
                    <h1>Pokemon Teambuilder</h1>
                </header>
                <main>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                            <input type="submit" value="Submit" />
                        </form>
                        <button onClick={this.handleAdd}>Add</button>
                    </div>
                    <div className="search">
                        <Pokemon
                            pokemon={this.state.object}
                        ></Pokemon>
                    </div>
                </main>
            </div>
        )
    }
}