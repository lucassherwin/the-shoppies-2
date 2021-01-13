import React from 'react'

export default function Results(props) {
    return (
        <div>
            <h2>Resluts for {props.search}</h2>
            <ul>
                {props.results.map((movie, index) => (
                    <li key={index}>{movie} <button>Nominate!</button></li>
                ))}
            </ul>
        </div>
    )
}
