import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import FilmCard from './components/FilmCard'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const [film, setFilm] = useState({})

  const fetchItems = async (query) => {
    console.log(process.env.REACT_APP_KEY)
    const result = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${query}`)

    const fetchedFilms = result.data.results[0]
    console.log(fetchedFilms)
    setFilm({
      name: fetchedFilms.title,
      release: fetchedFilms.release_date,
      language: fetchedFilms.original_language,
      overview: fetchedFilms.overview
    })
  }

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Form onSearch={fetchItems}/>
      <FilmCard film={film}/>
    </div>
  );
}

export default App;
