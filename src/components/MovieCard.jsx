import React from "react";
import "../App"
import { Link } from "react-router-dom";


const MovieCard = ({poster, movieTitle}) => {

    return(
        <>
            <div className="movie-card">
                <img src={poster} alt="poster is not available" className="movie-poster" />
                <h5>{movieTitle}</h5>
            </div>
        </>
    )

   
}


export default MovieCard;