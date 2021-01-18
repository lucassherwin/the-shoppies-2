import React, { Component } from 'react';
import { DirectUpload } from 'activestorage';
import axios from 'axios';

export class CreatePost extends Component {
    state = {
        title: '',
        description: '',
        points: 0,
        tag: 'Funny', // have funny as a default value
        images: null
    }

    handleChange = (event) => {
        if(event.target.name === 'images')
        {
            // going to have to convert a FileList to an array
            console.log(event.target.files)
            this.setState({images: event.target.files})
        }
        else
        {
            this.setState({[event.target.name]: event.target.value});
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');

        let post = {
            title: this.state.title,
            description: this.state.description,
            points: this.state.points,
            tag: this.state.tag,
            user_id: this.props.currentUser.id
        }

        axios.post('https://powerful-bastion-69893.herokuapp.com/posts', {
            title: post.title,
            description: post.description,
            points: post.points,
            tag: post.tag,
            user_id: post.user_id
        })
        .then(resp => this.uploadFile(Array.from(this.state.images), resp.data))
    }

    uploadFile = (files, post) => {
        files.forEach((file) => {
            let upload = new DirectUpload(file, 'https://powerful-bastion-69893.herokuapp.com/rails/active_storage/direct_uploads')
            upload.create((error, blob) => {
                if(error)
                {
                    console.log('error', error);
                }
                else
                {
                    axios.put(`https://powerful-bastion-69893.herokuapp.com/posts/${post.id}`, {
                        images: blob.signed_id
                    })
                    .then(resp => console.log(resp.data))
                }
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <div className='create-post'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Title:</label>
                        <input type='text' name='title' value={this.state.name} onChange={this.handleChange} />
                        <label>Description:</label>
                        <input type='text' name='description' value={this.state.description} onChange={this.handleChange} />
                        <label>Tag</label>
                        <select value={this.state.tag} onChange={this.handleChange} name='tag'>
                            <option value='Funny'>Funny</option>
                            <option value='Dog'>Dog</option>
                            <option value='Cat'>Cat</option>
                            <option value='Animal'>Animal</option>
                            <option value='Sports'>Sports</option>
                        </select>
                        <label>Choose an image(s):</label>
                        <input type='file' name='images' multiple={true} onChange={this.handleChange} />
                        <input type='submit' value='Create Post' />
                    </form>
                </div>
            </div>
        )
    }
}

export default CreatePost
