import React from 'react'

export default function Search({search, handleSearch}) {
    return (
        <div>
            <h4>Movie Title: </h4>
            <input className='search-bar' type='text' name='search' placeholder='Enter movie name' value={search} onChange={handleSearch} />
        </div>
    )
}
