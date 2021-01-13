import React from 'react'

export default function Search(props) {
    return (
        <div>
            <h4>Movie Title: </h4>
            <input type='text' name='search' placeholder='Enter movie name' value={props.search} onChange={props.handleSearch} />
        </div>
    )
}
