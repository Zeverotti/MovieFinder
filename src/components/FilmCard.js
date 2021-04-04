import React, { useState, useEffect } from 'react'
import '../css/FilmCard.css'

function FilmCard({ film }) {

  return (
    <div className='FilmCard'>
        <p>Titolo: {film.name}</p>
        <p>Release: {film.release}</p>
        <p>Lingua originale: {film.language}</p>
        <p className='Overview'>Overview: {film.overview}</p>
        <p>Streaming: {film.streaming}</p>
        <img src={film.image}/>
        <p>Similar film: {film.similar}</p>
    </div>
  );
}

export default FilmCard;
