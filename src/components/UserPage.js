import React, { Component } from 'react'
import axios from 'axios';

export class UserPage extends Component {
    state = {
        post: null
    }
    
    componentDidMount() {
        // get all the users images
        axios.post(`http://localhost:3001/posts/${this.props.currentUser.id}`, {
            user_id: this.props.currentUser.id
        })
        // .then(resp => console.log(resp.data))
        // .then(resp => this.savePosts(resp.data))
        .then(resp => this.setState({post: resp.data}))
    }

    // savePosts = (posts) => {
    //     console.log('here', posts)
    // }


    render() {
        return (
            <div>
                <h1>Welcome {this.props.currentUser.username}</h1>
                {this.state.post ? 
                    <div>
                        <h2>{this.state.post.post.title}</h2>
                        <p>{this.state.post.post.description}</p>
                        <img src={`http://localhost:3001/${this.state.post.images[0]}`} />
                    </div>
                : null}
            </div>
        )
    }
}

export default UserPage


// {this.state.post ?
//     <div>
//         <h2>{this.state.post.title}</h2>
//         <p>{this.state.post.description}</p>
//     </div>
// : null}