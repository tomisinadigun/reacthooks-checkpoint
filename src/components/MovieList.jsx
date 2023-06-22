import React from "react";
import { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";
import "../App"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5881ce94"


const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("superman");
    const [loading, setLoading] = useState(false)

    const fetchData = async (title) => {
        try {
            // setLoading(true)
            const response = await axios.get(`${API_URL}&s=${title}`);
            setMovies(response?.data.Search)
            // setLoading(false)
        } catch (error) {

        }
        
    }

    useEffect(() => {
        fetchData(search);
    })

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    return(
        <>
            <PageHeader/>
            <section className="search-movies">
                <input type="text" value={search} onChange={handleSearch} placeholder="search movies here..." />
            </section>

            <Container>
                <Row>
                    {
                        movies?.map((item, index) => {
                            return(
                                
                                <Col key={index}>
                                    <Link to={`/movie-detail/${item.imdbID}`}>
                                        <MovieCard  poster={item.Poster} movieTitle={item.Title} movieId={item.imdbID} key={item.imdbID}  />
                                    </Link>
                                </Col>
                                
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}


export default MovieList;