import React from 'react'
import './Movie.css';

function Movie({img, rating, title}) {
    return (
        <div className="movie">
            <div className="movie__container">
                <img alt="" className="movie__image" src={img}/>
                <div className="movie__info">
                    <div className="movie__rating">
                    <p>&#9733;</p>
                    <h3>{rating}</h3>
                    </div>
                    <div className="movie__title">
                        <h3>{title}</h3>
                    </div>
                    <button className="movie__button movie__watchlist">Watchlist</button>
                    <button className="movie__button movie__trailer">Trailer</button>
                </div>
            </div>

        </div>
    )
}

export default Movie;
