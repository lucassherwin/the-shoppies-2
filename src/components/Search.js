import React, { useState } from 'react'

export default function Search(props) {
    // const [search, setSearch] = useState('')
    return (
        <div>
            <input type='text' name='search' placeholder='Enter movie name' value={props.search} onChange={props.handleSearch} />
        </div>
    )
}
