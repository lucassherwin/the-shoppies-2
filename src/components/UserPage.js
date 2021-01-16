import React, { Component } from 'react'
import axios from 'axios';

export class UserPage extends Component {
    state = {

    }
    
    componentDidMount() {
        // get all the users images
        axios.post(`http://localhost:3001/posts/${this.props.currentUser.id}`, {
            user_id: this.props.currentUser.id
        })
        .then(resp => console.log(resp.data))
    }


    render() {
        return (
            <div>
                <h1>Welcome {this.props.currentUser.username}</h1>
            </div>
        )
    }
}

export default UserPage
