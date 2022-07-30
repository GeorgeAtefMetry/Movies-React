import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DelMovies } from '../store/action/movies'
import { ChangeCounter } from '../store/action/counter'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './favorites.module.css'
import { Link } from 'react-router-dom'
const Favorites = () =>  {
    const dispatch = useDispatch()

    const Movies = useSelector((state) => state.MoviesList.movies)
    let Counter = useSelector((state) => state.Counter.counter)

    const Remove = (e,movie) => {
        let filter = Movies.filter((mov) => {
            return mov.id !== movie.id
        })
        dispatch(DelMovies(filter))
        dispatch(ChangeCounter(--Counter))
    }
    
    return (
    <>
        <div className="container search" style={{marginTop:'100px'}}>
            <div className="row">
                <p className={classes.mainPara}>Your Favorites Movies are Here, Enjoy ✨</p>
            {Movies.map((movie) => {
            return(
                <>
                    <div className="col-md-6" style={{margin:'auto'}}>
                        <img className={classes.img} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt='' style={{width:'100%',height:'100%'}}></img>
                    </div>
                    <div className={`col-md-6 ${classes.movie}`} style={{margin:'auto',}}>
                        <div className={classes.details}>                                    
                            <i onClick={(e) => Remove(e,movie)} className={`fa-solid fa-star ${classes.icon}`} style={{float:'right'}}> </i>
                            <h3 className={classes.mainColor}>Title</h3>
                            <p className={classes.paraColor}>{movie.title}</p>
                            <hr></hr>

                            <h3 className={classes.mainColor}>Vote</h3>
                            <p className={classes.paraColor}><span className={classes.vote}>{movie.vote_average}</span></p>
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
                    <hr></hr>
                </>
                )
            })}
            </div>
        </div>
    </>
    )
}
export default Favorites