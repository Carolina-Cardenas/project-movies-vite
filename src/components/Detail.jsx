import React, {useState, useEffect} from "react"
import { useParams,Link, json } from "react-router-dom"
import './Detail.css'
import { NavBar } from "./NavBar"

export const Detail = () => {
    const [detail, setDetail] = useState([])
    const { id } = useParams("")

       useEffect (() => {
    
        fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=432fbe8327d23760a3e88a6c24652d16&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
            setDetail(json)
 console.log(json)
        })
       
    },[id] )

  return (
    <article className="detailPage">
                 <NavBar/>
                <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${detail.backdrop_path})` }}>
          <div className="summary">
            <img src={`https://image.tmdb.org/t/p/w342${detail.poster_path}`} alt={detail.title} />
            <div className="details">
              <h1><span className="title">{detail.title}</span>
               <span className="rating">{!isNaN(detail.vote_average) ? Math.round(detail.vote_average * 10) / 10 : 'Rating not available'}</span></h1>
              <p>{detail.overview}</p>
            </div>
          </div>
        </div>
      
    </article>

  )
}
