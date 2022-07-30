import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from 'axios'
import axiosInstace from '../axiosConfig/axiosInstace'
import classes from './search.module.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
const Search = (props)=>{

    const [value, setValue] = useState('')
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=768ed5a9c272e9df7ee6d6d1d1d7552a&query=${value}`)
        .then((res)=> {
            console.log(res.data.results[0])
            setMovie(res.data.results[0])
        })
        .catch(err => console.log(err))
    })
    if(value===''){
        console.log('nada')
    }
    else{
        console.log(value)
    }

    return(
        <>
        <div className='container' style={{marginTop:'100px'}}>
            <p style={{color:'#F2B901',fontSize:'30px',textAlign:'center'}}>👇Type Here👇 To Get The Movie You Desire </p>
            <input type="text" className="form-control" onChange={(e) => setValue(e.target.value)}  style={{marginBottom:'20px'}}></input>
        </div>
        <div className={value ? `${classes.value} container`  : `${classes.nada}`} style={{marginTop:'10px',marginBottom:'50px'}} >
            <div className="row">
                <div className="col-md-6" style={{margin:'auto'}}>
                    <img className={classes.img} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt='' style={{width:'100%',height:'100%'}}></img>
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

                        <Button className={classes.button}>
                            <Link to={`/details/${movie.id}`} key={movie.id}  style={{color:'#000',fontWeight:'bold',fontSize:'17px', textDecoration:'none',}}>
                                Go To movie
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Search