import React, { Component } from 'react';
import Search from './components/Search';
import Nominations from './components/Nominations.js';
import Results from './components/Results.js';
import axios from 'axios';
class App extends Component {
  state = {
    nominations: [], // list of all the nominations
    search: '',
    results: []
  }

  nominate = (event) => {
    event.preventDefault();
    console.log('nominate movie');
  }

  handleSearch = (event) => {
    const key = process.env.REACT_APP_OMBD_API_KEY;
    console.log('search: ', event.target.value);
    let term = event.target.value;
    let { name, value } = event.target;
    this.setState({[name]: value});

    let resultString;
    let searchResults = this.state.results;

    axios.get(`http://www.omdbapi.com/?apikey=${key}&t=${term}`)
    .then(res => {
      if(res.data['Response'] !== "False")
      {
          resultString = `${res.data['Title']} (${res.data['Year']})`
          if(!searchResults.includes(resultString)) //if it doesnt already include the value
          {
              searchResults.push(resultString); //push the whole movie obj that is returned into the array
              // console.log('search results: ', searchResults);
              this.setState({searchResults}); //set it to state
          }
      }
  })
  }


  render()
  {
    return (
      <div>
        <h1>The Shoppies</h1>
        <Search search={this.state.search} handleSearch={this.handleSearch} />
        {this.state.nominations.length !== 0 ? <Nominations /> : null}
        {this.state.results.length !== 0 ? <Results results={this.state.results} search={this.state.search} /> : null}
      </div>
      
    )
  }
}

export default App;