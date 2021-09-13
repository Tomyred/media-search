import React from 'react'
import PropTypes from 'prop-types'

const Card = ({movie}) => {
return (
    <div className="col-md-4">
    <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card-img-top"></img>
        <div className="card-body">
            <h4 className="text-white">{movie.Title}</h4>
            <p className="text-white">{movie.Type} - {movie.Year}</p>
        </div>
    </div>
</div>
)
}

Card.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string,
        Type: PropTypes.string,
        
    }).isRequired
}

export default Card;