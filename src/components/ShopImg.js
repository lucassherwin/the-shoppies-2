import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export class ShopImg extends Component {
    state = {
        images: null,
        redirect: null
    }

    getImages = (posts) => {
        let images = []
        posts.map(post => (
            post.images.forEach(image => {
                images.push(image);
            })
        ))
        // console.log(images)
        this.setState({images})
    }

    handleClick = () => {
        this.setState({redirect: '/login'})
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
                <button onClick={this.handleClick}>Create Account</button>
                <div>
                    {this.state.images ? this.state.images.map((image, index) => (
                        <img src={`http://localhost:3001/${image}`} alt='alt' key={index} />
                    )) : null}
                </div>
            </div>
        )
    }
}

export default ShopImg
