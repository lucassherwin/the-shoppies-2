import React, { Component } from 'react'

export class CreatePost extends Component {
    state = {
        title: '',
        description: '',
        points: 0,
        tag: '',
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
        console.log('submit')
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
