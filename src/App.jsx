import './App.css'
import MovieList from './components/MovieList';
import { Route, Routes, useParams } from 'react-router-dom';
import MovieDetail from './components/MovieDetails';
import { useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function App() {
  let {movieId} = useParams()
  
  return (
    <>

      <Routes>
        <Route path='/' element = {<MovieList />} />
        <Route path={`/movie-detail/:${movieId}`} element = {<MovieDetail thisMovie={movieId} />} />
      </Routes>
      
    </>
  )
}

export default App;
