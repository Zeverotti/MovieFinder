import React, { useState, useEffect } from 'react'
import '../css/FilmCard.css'

function FilmCard({ film }) {

  return (
    <div className='FilmCard'>
        <p>Titolo: {film.name}</p>
        <p>Release: {film.release}</p>
        <p>Lingua: {film.language}</p>
        <p className='Overview'>Overview: {film.overview}</p>
    </div>
  );
}

export default FilmCard;
