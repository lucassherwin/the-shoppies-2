import React, { Component } from 'react';
import Search from './components/Search';

class App extends Component {
  state = {
    nominations: null, // list of all the nominations
    search: ''
  }

  nominate = () => {
    console.log('nominate movie');
  }

  handleSearch = (event) => {
    console.log('search: ', event.target.value)

    let { name, value } = event.target;
    this.setState({[name]: value})
  }


  render()
  {
    return (
      <div>
        <h1>The Shoppies</h1>
        <Search search={this.state.search} handleSearch={this.handleSearch} />
      </div>
      
    )
  }
}

export default App;