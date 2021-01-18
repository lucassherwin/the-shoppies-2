import React, { Component } from 'react';
import Welcome from './components/Welcome.js';
import Login from './components/Login.js';
import UserPage from './components/UserPage.js';
import CreatePost from './components/CreatePost.js';
import TheShoppies from './components/TheShoppies.js';
import Navbar from './components/Navbar.js';
import ShopImg from './components/ShopImg.js';
import CreateAccount from './components/CreateAccount.js';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    nominations: [], // list of all the nominations
    search: '',
    results: [],
    currentUser: null,
    // redirect: null
  }

  handleSearch = (event) => {
    // const key = process.env.REACT_APP_OMBD_API_KEY;
    const key =  'b953e87d';
    let term = event.target.value;
    if(term === '') // if the user deletes what is in the search bar clear the results
    {
      this.setState({results: []});
    }
    let { name, value } = event.target;
    this.setState({[name]: value});

    let resultString;
    let searchResults = this.state.results;

    axios.get(`https://www.omdbapi.com/?apikey=${key}&t=${term}`)
    .then(res => {
      if(res.data['Response'] !== "False")
      {
        resultString = `${res.data['Title']} (${res.data['Year']})`
        if(!searchResults.includes(resultString)) //if it doesnt already include the value
        {
          searchResults.push(resultString); //push the whole movie obj that is returned into the array
          this.setState({searchResults}); //set it to state
        }
      }
    })
  }

  nominate = (movie) => {
    let nominations = this.state.nominations;

    if(nominations.length === 4) // the next nomination will fill the array (max of 5 nominations)
    {
      nominations.push(movie);
      localStorage['nominations'] = JSON.stringify(nominations); // set localStorage to be the updated nominations array
      this.setState({nominations});
      this.setState({search: ''}); // reset search bar to empty after nominating a movie
      alert('You have nominated 5 movies!');
    }
    else if(nominations.length < 4) // less than 4 means we can handle it normally
    {
      nominations.push(movie);
      localStorage['nominations'] = JSON.stringify(nominations); // set localStorage to be the updated nominations array
      this.setState({nominations});
      this.setState({search: ''}); // reset search bar to empty after nominating a movie
    }
    else
    {
      alert('You can only nominate a max of 5 movies!');
    }
  }

  removeNomination = (remove) => {
    let nominations = this.state.nominations;
    nominations = nominations.filter(movie => movie !== remove);
    localStorage['nominations'] = JSON.stringify(nominations); // set localStorage to be the updated nominations array
    this.setState({nominations});
  }

  getUser = (username, password) => {
    return axios.post('http://localhost:3001/login', {
      username: username,
      password: password
    })
  }

  login = async (username, password) => {
    let resp = await this.getUser(username, password)
    this.setState({currentUser: resp.data})
    return true;
    // TODO: add a check to see if the user succesfully logged in
    // TODO: add a redirect that changes the url
  }

  createUser = (user) => {
    return axios.post('http://localhost:3001/createuser', {
      username: user.username,
      password: user.password
    })
  }

  createAccount = async (user) => {
    let resp = await this.createUser(user);
    if(resp.data.username)
    {
      console.log('success');
      this.setState({currentUser: resp.data})
      return true;
    }
    else
    {
      console.log('error', resp);
      return false;
    }
  }

  componentDidMount() {
    if(localStorage['nominations']) // if the array exists in localStorage
    {
      this.setState({nominations: JSON.parse(localStorage['nominations'])}); // set array in state
    }
  }


  render()
  {
    return (
      <div className='main'>
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' >
            <Welcome />
          </Route>
          <Route exact path='/shoppies'>
            <TheShoppies handleSearch={this.handleSearch} search={this.state.search} results={this.state.results} nominate={this.nominate} nominations={this.state.nominations} removeNomination={this.removeNomination} />
          </Route>
          <Route exact path='/shopimg' currentUser={this.state.currentUser}>
            <ShopImg />
          </Route>
          <Route exact path='/login'>
            <Login login={this.login} />
          </Route>
          <Route exact path='/createaccount'>
            <CreateAccount createAccount={this.createAccount} />
          </Route>
          <Route exact path='/userpage'>
            <UserPage currentUser={this.state.currentUser} /> 
          </Route>
          <Route exact path='/createpost'>
            <CreatePost currentUser={this.state.currentUser} />
          </Route>
        </Switch>
      </div>
      
    )
  }
}

export default App;