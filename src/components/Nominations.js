import React from 'react'

export default function Nominations({ nominations, removeNomination }) {
    return (
        <div>
            <h2>Nominations</h2>
            <ul>
                {nominations.map((movie, index) => (
                    <li key={index}>{movie}<button onClick={() => removeNomination(movie)}>Remove</button></li>
                ))}
            </ul>
        </div>
    )
}
