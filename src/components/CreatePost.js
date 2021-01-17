import React, { Component } from 'react'

export class CreatePost extends Component {
    state = {
        title: '',
        description: '',
        points: 0,
        tag: ''
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
            </div>
        )
    }
}

export default CreatePost
