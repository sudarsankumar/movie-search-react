import React from 'react'
import MovieList from './MovieList'

function MovieLists({results,openPopup}) {
    return (
        <section className="results">
            {results.map(result=>(
                <MovieList key={result.imdbID} result={result} openPopup={openPopup} />
            ))}
        </section>
    )
}

export default MovieLists
