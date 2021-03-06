import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import FilmCard from './components/FilmCard'
import path from 'path';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const [film, setFilm] = useState({})
  
  const fetchItems = async (query) => {
    console.log(process.env.REACT_APP_KEY)
    const result = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${query}`)
    console.log(result)
    const fetchedFilms = result.data.results[0];

    if(result.data.results.length === 0) {
      return
    }

    document.title = query

    const services = await axios(`https://api.themoviedb.org/3/movie/${fetchedFilms.id}/watch/providers?api_key=${process.env.REACT_APP_KEY}`)
    const fetchedProviders = services.data


    let allProviders;
    try {
      allProviders = fetchedProviders.results.IT.flatrate.map((e) => e.provider_name).join(', ');
    } catch (error) {
      allProviders = 'Not found';
    }

    const posterPath = path.join('https://image.tmdb.org/t/p/w185/', fetchedFilms.poster_path);

    const similar = await axios(`https://api.themoviedb.org/3/movie/${fetchedFilms.id}/similar?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`)
    console.log(similar)
    const similarFilm = similar.data.results.map((e) => e.title).join(', ');

    setFilm({
      name: fetchedFilms.title,
      release: fetchedFilms.release_date,
      language: fetchedFilms.original_language,
      overview: fetchedFilms.overview,
      streaming: allProviders,
      image: posterPath,
      similar: similarFilm
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
