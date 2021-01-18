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
        let images = []
        posts.map(post => (
            // post.images.forEach(image => {
            //     images.push(image);
            // })
            images.push(post.images[0]) // gets only the first image from each post to display
        ))
        // console.log(images)
        this.setState({images})
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
        axios.get('http://localhost:3001/posts')
        .then(resp => this.getImages(resp.data))
    }


    render() {
        if(this.state.redirect)
        {
            return(<Redirect to={this.state.redirect} />)
        }
        return (
            <div>
                <h1>Shop IMG</h1>
                <h2>The Shopify Image Repository</h2>
                <button onClick={this.handleClick}>Create Post</button>
                <div>
                    {this.state.images ? this.state.images.map((image, index) => (
                        <img src={`http://localhost:3001/${image}`} alt='alt' key={index} width='400' height='400' />
                    )) : null}
                </div>
            </div>
        )
    }
}

export default ShopImg
