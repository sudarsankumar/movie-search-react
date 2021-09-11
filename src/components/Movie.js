import React from 'react'

function Movie({selected,closePopup}) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>({selected.Year})</span> </h2>
                <p>Run Time : {selected.Runtime}</p>
                <p className="rating">Rating : {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} />
                    <p>{selected.Plot}</p>
                </div>
                <div className="other-details">
                    <h2>Actors : {selected.Actors}</h2>
                    <h2>Director : {selected.Director}</h2>
                    <h4>Rated : {selected.Rated}</h4>
                    <h4>Language : {selected.Language}</h4>
                    <p>Released : {selected.Released}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Movie