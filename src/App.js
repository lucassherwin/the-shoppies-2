import React, { Component } from 'react';
import Search from './components/Search';
import Nominations from './components/Nominations.js';
import Results from './components/Results.js';
import axios from 'axios';
class App extends Component {
  state = {
    nominations: null, // list of all the nominations
    search: '',
    results: null
  }

  nominate = (event) => {
    event.preventDefault();
    console.log('nominate movie');
  }

  handleSearch = (event) => {
    const key = process.env.REACT_APP_OMBD_API_KEY;
    console.log('search: ', event.target.value);

    let { name, value } = event.target;
    this.setState({[name]: value});

    axios.get(`http://www.omdbapi.com/?apikey=${key}&t=${this.state.search}`)
    .then(resp => console.log(resp))
  }


  render()
  {
    return (
      <div>
        <h1>The Shoppies</h1>
        <Search search={this.state.search} handleSearch={this.handleSearch} />
        {this.state.nominations ? <Nominations /> : null}
        {this.state.results ? <Results /> : null}
      </div>
      
    )
  }
}

export default App;