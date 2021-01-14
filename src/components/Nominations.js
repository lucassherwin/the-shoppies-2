import React from 'react'

export default function Nominations({ nominations }) {
    return (
        <div>
            <h2>Nominations</h2>
            <ul>
                {nominations.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    )
}
