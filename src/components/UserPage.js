import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export class UserPage extends Component {
    state = {
        posts: null,
        redirect: null
    }
    
    componentDidMount() {
        // get all the users images
        axios.post(`https://powerful-bastion-69893.herokuapp.com/posts/${this.props.currentUser.id}`, {
            user_id: this.props.currentUser.id
        })
        // .then(resp => console.log(resp.data))
        // .then(resp => this.savePosts(resp.data))
        .then(resp => this.setState({posts: resp.data}))
    }

    handleClick = () => {
        console.log('here')
        this.setState({redirect: '/createpost'})
    }


    render() {
        if(this.state.redirect)
        {
            return(<Redirect to={this.state.redirect} />)
        }
        return (
            <div>
                <h1>Welcome {this.props.currentUser.username}</h1>
                <button onClick={this.handleClick} >Create Post</button>
                {this.state.posts ? 
                    this.state.posts.posts.map((post, id) => (
                        <div className='user-post' key={id}>
                            <h2 className='post-title'>{post.post.title}</h2>
                            <p className='post-desc'>{post.post.description}</p>
                            {post.images.map((image, id) => (
                                <img src={`https://powerful-bastion-69893.herokuapp.com/${image}`} key={id} className='post-image' alt='help' />
                            ))}
                        </div>
                    ))
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

// {this.state.post ? 
//     <div>
//         <h2>{this.state.post.post.title}</h2>
//         <p>{this.state.post.post.description}</p>
//         <img src={`http://localhost:3001/${this.state.post.images[0]}`} />
//     </div>
// : null}