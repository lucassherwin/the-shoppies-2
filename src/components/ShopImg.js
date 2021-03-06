import React, { Component } from 'react'
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';

export class ShopImg extends Component {
    state = {
        images: null,
        redirect: null,
        posts: null
    }

    getImages = (posts) => {
        // this gets the images from each post
        let posts_arr = []
        posts.map(post => (
            // post.images.forEach(image => {
            //     images.push(image);
            // })
            posts_arr.push({image: post.images[0], post_id: post.id}) // gets only the first image from each post to display
        ))
        // console.log(images)
        this.setState({posts: posts_arr})
    }

    handleClick = () => {
        if(this.props.currentUser) // if the user is logged in
        {
            this.setState({redirect: '/createpost'}); // direct them to create post
        }
        else // user is not logged in
        {
            alert('Please log in to create a post'); // shows an alert then directs them to the login page
            this.setState({redirect: '/login'})
        }
    }

    componentDidMount() {
        axios.get('https://powerful-bastion-69893.herokuapp.com/posts')
        // axios.get('')
        .then(resp => this.getImages(resp.data))
        // .then(resp => console.log(resp.data))
    }


    render() {
        if(this.state.redirect)
        {
            return(<Redirect to={this.state.redirect} />)
        }
        let posts = this.state.posts;
        return (
            <div>
                <h1>Shop IMG</h1>
                <h2>The Shopify Image Repository</h2>
                <button onClick={this.handleClick}>Create Post</button>
                <div>
                    {posts ? posts.length > 0 ? posts.map((post, index) => (
                        <img src={`https://powerful-bastion-69893.herokuapp.com/${post.image}`} alt='alt' key={index} width='400' height='400' />))
                        : <p>Welcome to Shop IMG! There are no posts yet, click the button to create the first post!</p> : null}
                </div>
            </div>
        )
    }
}

export default ShopImg
