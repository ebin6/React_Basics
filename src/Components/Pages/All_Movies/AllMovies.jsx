import React, { useState } from 'react'
import "./allmovies.css"
import Card from './Card'
function AllMovies() {
  const [movies,setMovies]=useState([

    {
      "#TITLE": "Spider-Man",
      "#YEAR": 2002,
      "#IMDB_ID": "tt0145487",
      "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_.jpg",
    },
    {
      "#TITLE": "Spiderman the Verse",
      "#YEAR": 2019,
      "#IMDB_ID": "tt12122034",
      "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BNDBjNWY3OWYtMjk2ZS00NjA2LWE0NzAtOWQxNzBhNjZlMGYyXkEyXkFqcGc@._V1_.jpg",
    } , 
  ])
 
  return (
    <>
      <h1>All Movies</h1>
      <div className="movie-section">
        {
          movies.map((cinema)=>(
           <Card key={cinema["#IMDB_ID"]} title={cinema["#TITLE"]} poster={cinema["#IMG_POSTER"]}/>
          ))
        }
      </div>
      
    
    </>

   
  )
}

export default AllMovies