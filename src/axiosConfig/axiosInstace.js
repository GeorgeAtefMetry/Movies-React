import axios from 'axios'

const axiosInstace = axios.create({
    baseURL:`https://api.themoviedb.org/3`,
    params:{
        api_key:'768ed5a9c272e9df7ee6d6d1d1d7552a'
    }
})

// axiosInstace.interceptors.request.use(function(config){
//     config.headers = {
//         "auth":"21314325"
//     }
//     config.params = {
//         limit:10
//     }
//     console.log(config)
//     return config
//     },function(err){
//         return Promise.reject(err)
//     }
// )
// axiosInstace.interceptors.response.use(function(response){

//     console.log(response)
//     return response
//     },function(err){
//         return Promise.reject(err)
//     }
// )

export default axiosInstace 