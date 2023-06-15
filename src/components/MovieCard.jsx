import React from "react";
import "../App"


const MovieCard = ({poster, movieTitle}) => {
    return(
        <>
            
            <div className="movie-card">
                <img src={poster} alt="poster is not available" className="movie-poster" />
                <h4>{movieTitle}</h4>
            </div>
           
        </>
    )
}


export default MovieCard;