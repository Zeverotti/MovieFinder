import React, { useState, useEffect } from 'react'

function Form({ onSearch }) {
  
  const [query, setQuery] = useState("")

  const onChange = (q) => {
    setQuery(q)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
    setQuery("")
  }

  return (
    <form className="Form" onSubmit={onSubmit}>
      <input value={query} className='SearchBar' type='text' placeholder='Search films' onChange={(e) => onChange(e.target.value)}></input>
    </form>
  );
}

export default Form;
