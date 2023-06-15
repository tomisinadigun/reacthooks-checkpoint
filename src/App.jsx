import './App.css'
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';



function App() {

  return (
    <>
      <header className='header-section'>
        <h1>Movies</h1>
      </header>
      
      <MovieList />
    </>
  )
}

export default App;
