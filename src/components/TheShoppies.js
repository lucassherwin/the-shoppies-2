import React from 'react'
import Search from './Search';
import Nominations from './Nominations.js';
import Results from './Results.js';

export default function TheShoppies({ handleSearch, search, results, nominate, nominations, removeNomination }) {
    return (
        <div>
            <h1 id='header'>The Shoppies</h1>
            <div className='search'>
                <Search search={search} handleSearch={handleSearch} />
            </div>
            <div className='bottom'>
                <div className='column'>
                    <Results results={results} search={search} nominate={nominate} nominations={nominations} />
                </div>
                <div className='column'>
                    {nominations.length !== 0 ? <Nominations nominations={nominations} removeNomination={removeNomination} /> : null}
                </div>
            </div>
        </div>
    )
}
