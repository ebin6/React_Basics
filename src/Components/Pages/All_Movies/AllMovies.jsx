import React, { useEffect, useState } from 'react'
import "./allmovies.css"
import Card from './Card'
import axios from 'axios'

function AllMovies() {
  const [movies,setMovies]=useState([])
  const [text,setText]=useState("spiderman")

  useEffect(()=>{handleSearch()},[])
  
  const handleSearch=()=>{
      axios.get(`https://imdb.iamidiotareyoutoo.com/search?q=${text}`)
      .then((response)=>{
        console.log(response.data.description)
        setMovies(response.data.description)
      })
  }
  return (
    <>
      <h1>All Movies</h1>

      <div style={{margin:"50px 10px"}}> 
        <input type='text' name="search" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>

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