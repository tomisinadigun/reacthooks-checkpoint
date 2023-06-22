import React from "react";
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import PageHeader from "./PageHeader";


const MovieDetail = () => {
    let param = useParams();
    let thisMovieID = param.undefined
    const [movies, setMovies] = useState([]);
    const API_URL  = "http://www.omdbapi.com/?i=tt3896198&apikey=5881ce94"
  
    const fetchMovie = async (title) =>{

        const response = await axios.get(`${API_URL}&s=${title}`);
        setMovies(response?.data.Search)
    }

    useEffect(() => {
        fetchMovie("superman")
    }, [])

    const getCurrentMovie = movies.filter(movieIds => movieIds.imdbID === thisMovieID  )
    const currentMovie = getCurrentMovie[0]
    console.log(currentMovie)

    return (
        <>
            <PageHeader>Movie Details</PageHeader>
            <Container>
                    <div className="movie-detail-card">
                        {
                            currentMovie?
                                <img src={currentMovie.Poster} alt="" />
                            : <p>No Poster</p>
                        }
                    </div>
                    <div className="movie-info">
                        {
                            currentMovie? 
                                <>
                                    <h4>{currentMovie.Title}</h4>
                                    <h6>{currentMovie.Year}</h6>
                                    <Link to="https://youtu.be/y73_RpazLVw">Movie Triller</Link>
                                </>
                            :<h5>Loading...</h5>
                        }
                    </div>
            </Container>
        </>
    )
}


export default MovieDetail;