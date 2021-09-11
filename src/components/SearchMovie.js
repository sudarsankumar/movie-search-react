import React from 'react'

function SearchMovie({handleInput,search}) {
    return (
        <section className="searchbox-wrap">
            <input className="searchbox" type="text" placeholder="Enter movie name" onChange={handleInput} onKeyPress={search} />
        </section>
    )
}

export default SearchMovie