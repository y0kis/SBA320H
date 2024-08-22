import React from 'react'
import SearchForm from './SearchForm';
import MovieList from './MovieList'
import './App.css'

function App() {

  return (
    <Router>
      <div>
        <h1>Movie Recommendation</h1>
        <SearchForm />
        <MovieList movies={movies} />
      </div>

    </Router>
  )
}

export default App;
