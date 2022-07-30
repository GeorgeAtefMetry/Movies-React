import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from 'axios'
import axiosInstace from '../axiosConfig/axiosInstace'
import classes from './details.module.css'
const Details = (props)=>{
    const params = useParams()

    const [movie, setMovie] = useState({})

    useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=768ed5a9c272e9df7ee6d6d1d1d7552a`)
        .then((res)=> {
            console.log(res.data)
            setMovie(res.data)
        })
        .catch(err => console.log(err))
    },[])

    return(
        <>
        <div className="container search" style={{marginTop:'100px'}}>
            <div className="row">
                <div className="col-md-6" style={{margin:'auto'}}>
                    <img className={classes.img} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' style={{width:'100%',height:'600px'}}></img>
                </div>
                <div className="col-md-6" >
                    <div className={classes.details}>
                        <h3 className={classes.mainColor}>Title</h3>
                        <p className={classes.paraColor}>{movie.title}</p>
                        <hr></hr>

                        <h3 className={classes.mainColor}>Home Page</h3>
                        <p className={classes.paraColor}><a>{movie.homepage}</a></p>
                        <hr></hr>
                        
                        <h3 className={classes.mainColor}>Overview</h3>
                        <p className={classes.paraColor}>{movie.overview}</p>
                        <hr></hr>

                        <h3 className={classes.mainColor}>Vote</h3>
                        <p className={classes.paraColor}>{movie.vote_average}</p>
                        <hr></hr>

                        <h3 className={classes.mainColor}>Release Date</h3>
                        <p className={classes.paraColor}> {movie.release_date}</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Details