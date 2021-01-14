import React from 'react'

export default function Results({search, results}) {
    return (
        <div>
            <h2>Resluts for {search}</h2>
            <ul>
                {results.map((movie, index) => (
                    <li key={index}>{movie} <button>Nominate!</button></li>
                ))}
            </ul>
        </div>
    )
}
