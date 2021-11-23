
import './PokemonTeambuilder.css';
import React, {Component} from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';

export default class PokemonTeambuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            object:{},
            array: []
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
        const object = {};
        const array = [];
        this.setState({value,object,array})
    }

    handleAdd(e) {
        e.preventDefault();
        if (this.state.value ==="") {
            alert("search for pokemon first")
            console.log("search first")
        } else {
            const temp = this.state.object;
            let arr = this.state.array.slice();
            arr.push(temp);
            this.setState({array: arr}, () => {
                console.log(this.state.array)
            })
        }
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
            this.setState({object:response.data})
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
                    <button onClick={this.handleAdd}>Add</button>
                    <Pokemon
                        pokemon={this.state.object}
                    ></Pokemon>
                </main>
            </div>
        )
    }
}