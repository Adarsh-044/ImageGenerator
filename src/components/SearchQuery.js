import './SearchQuery.css'
import React from 'react'
import { useState } from 'react';

const SearchQuery = ({ onClick }) => {
      const [term, setTerm] = useState('');

      const handleFormClick = (event) => {
            event.preventDefault();
            onClick(term)
      }

      const eventHandler = (event) => {
            console.log(event.target.value);
            setTerm(event.target.value);
      }
      return (
            <div className='search-bar'>
                  <form onSubmit={handleFormClick}>
                        <input
                              value={term}
                              onChange={eventHandler} 
                              placeholder='Enter search term'
                        />
                  </form>

            </div>
      )
}

export default SearchQuery