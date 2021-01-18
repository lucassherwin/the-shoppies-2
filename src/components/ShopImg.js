import React, { Component } from 'react'
import axios from 'axios';

export class ShopImg extends Component {
    state = {
        images: null
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

    componentDidMount() {
        axios.get('http://localhost:3001/posts')
        .then(resp => this.getImages(resp.data))
    }


    render() {
        return (
            <div>
                <h1>Shop IMG</h1>
                <h2>The Shopify Image Repository</h2>
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
