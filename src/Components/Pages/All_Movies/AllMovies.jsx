import React, { useEffect, useState } from 'react'
import "./allmovies.css"
import Card from './Card'
import axios from 'axios'

function AllMovies() {
  const [movies,setMovies]=useState([])

  useEffect(()=>{
   axios.get("https://imdb.iamidiotareyoutoo.com/search?q=spiderman")
  .then((response)=>{
    console.log(response.data.description)
    setMovies(response.data.description);})
  },[])
  
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