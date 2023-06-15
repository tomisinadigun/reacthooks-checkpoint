import React from "react";
import { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";
import "../App"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5881ce94"


const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("superman");

    const fetchData = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
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
            <section className="search-movies">
                <input type="text" value={search} onChange={handleSearch} placeholder="search movies here..." />
            </section>

            <Container>
                <Row>
                    {
                        movies?.map((item, index) => {
                            return(
                                <Col key={index}>
                                    <MovieCard  poster={item.Poster} movieTitle={item.Title} key={index}  />
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