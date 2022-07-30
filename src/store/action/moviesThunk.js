import axiosInstace from "../../axiosConfig/axiosInstace"
export default function changeMovies(){
    return (dispatch) => {
        axiosInstace.get('movie/popular')
        .then((res)=>{
            dispatch({type:'set_movies_thunk',payload:res.data.results})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
