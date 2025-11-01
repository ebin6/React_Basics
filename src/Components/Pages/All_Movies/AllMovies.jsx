import React, { useState } from 'react'
import "./allmovies.css"
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
           <div className='card' key={cinema["#IMDB_ID"]}>
              <img src={cinema["#IMG_POSTER"]}/>
              <div className='card-body'>
                 <h4>{cinema["#TITLE"]}</h4>
              </div>  
           </div> 
          ))
        }
      </div>
      
    
    </>

   
  )
}

export default AllMovies