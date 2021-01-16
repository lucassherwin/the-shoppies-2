import React from 'react'

export default function Results({ search, results, nominate, nominations }) {
    return (
        <div>
            <h2 id='results-header'>Results for: {search}</h2>
            <ul>
                {results.map((movie, index) => (
                    <li key={index}>{movie} <button onClick={() => nominate(movie)} disabled={nominations.includes(movie)}>Nominate!</button></li>
                ))}
            </ul>
        </div>
    )
}
