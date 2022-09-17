import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import axiosInstace from '../axiosConfig/axiosInstace'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Classmovie from  './movies.module.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import pic from '../images/background.jpg'
import pic2 from '../images/messi.jpg'
import pic3 from '../images/background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FaBeer } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { SetMovies,DelMovies } from '../store/action/movies';
import {ChangeCounter} from '../store/action/counter'
import changeMovies from '../store/action/moviesThunk'
import Carousel from 'react-bootstrap/Carousel';

const Movies = () =>{

    const [movie, setMovies] = useState([])
    const [page,setPage] = useState(1)

    const Movies = useSelector((state) => state.MoviesList.movies)
    let Counter = useSelector((state) => state.Counter.counter)
    
    // const movie = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        axiosInstace.get('movie/popular',{params:{page:`${page}`}})
        .then((res)=>{
            setMovies(res.data.results.slice(0,15))
            // console.log(res.data.results)
            let favMovies = res.data.results
            favMovies.map((movie)=>{
                for(let mov of Movies){
                    if(mov.id === movie.id){
                        return movie.fav = true
                    }
                }
            })
        })
        .catch((err)=>{
            console.log(err)
        })
        // dispatch(changeMovies())
    })

    const NextPage = () =>{
        setPage(page + 1)
    }
    const PrevPage = () =>{
        setPage(page - 1)
    }
    // function goTo(e){
    //     console.log(value)
    // }
    const toFavorite = (e,movie) =>{

        if(e.target.className === 'fa-regular fa-star' ){
            e.target.className = 'fa-solid fa-star'

            dispatch(SetMovies(movie))
            dispatch(ChangeCounter(++Counter))

        }else{
            e.target.className = 'fa-regular fa-star'

            let filter = Movies.filter((mov)=>{
                return mov.id !== movie.id
            })

            dispatch(DelMovies(filter))
            dispatch(ChangeCounter(--Counter))
        }
    }


    return(
        <>

        <Carousel className={`${Classmovie.carousel}`}>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-60"
            src="https://www.fortressofsolitude.co.za/wp-content/uploads/2022/02/Jurassic-World-Dominion-Horror-Scary.jpeg"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-60"
            src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/minions-rise-of-gru.jpg"
            alt="Second slide"
            />
        </Carousel.Item >
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-60"
            src="https://phantom-marca.unidadeditorial.es/a9eedebb39fad90f13bd739047dfd2e0/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/28/16537530418245.jpg"
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-60"
            src="https://images.thedirect.com/media/article_full/lightyear-review.jpg"
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-60"
            src="https://m.gomhuriaonline.com/Upload/News/19-7-2022_04_43_21_GomhuriaOnline_4371658198601.jpg"
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>



        <div className='container'>
            <div className='row'>
            {movie.map((movie) => {
            return(
                <>        
                <Card className={`col-sm-6  col-lg-4 ${Classmovie.card}`}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} style={{boxShadow:" -1px 11px 11px 0px #000"}} />
                    <Card.Body className={Classmovie.cardbody}>
                        <Card.Title className={Classmovie.title} style={{ overflow:"hidden",marginBottom:'20px' }}>
                            {movie.title} 
                            {(movie.fav) ? <i onClick={(e)=>toFavorite(e,movie)} class="fa-solid fa-star"></i> : <i onClick={(e)=>toFavorite(e,movie)} class="fa-regular fa-star"></i>}
                        </Card.Title>
                        <Card.Title className={Classmovie.date}>
                            Realease Date : <span>{movie.release_date}</span>
                        </Card.Title>
                        <Button className={Classmovie.button}>
                            <Link to={`/details/${movie.id}`} key={movie.id}  style={{color:'#000',fontWeight:'bold',fontSize:'17px', textDecoration:'none',}}>
                                Go To movie
                            </Link>
                        </Button>
                    </Card.Body>
                </Card>
                </>
                )
            })}
            </div>


            <div style={{display: 'flex', marginBottom:'30px'}}>
                <button className={`${Classmovie.btnPrev} btn`} onClick={(p)=>{ PrevPage()}}>Prev Page</button>
                <button className={`${Classmovie.btnNext} btn ms-auto`}  onClick={(p)=>{ NextPage()}}>Next Page</button>
            </div>



        
        </div>
        </>
    )
}

export default Movies


// axios.post("url",'data',{params:{}})
// .then((res)=>{
//     setMovies(res.data)
// })
// .catch((err)=>{
//     console.log(err)
// })