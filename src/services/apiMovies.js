const { default: axios } = require("axios");


const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        language: 'pt-BR'
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTM1YzJmYTIyNTUzZDhlYjU5YjRiZTRiNWRhODQzOSIsIm5iZiI6MTcyNTg0MDI4Ny45ODY0OTUsInN1YiI6IjY0ZWZjYjc4NzJjMTNlMDEzOWIzNDA4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g6p6mz-AQyUSXU_AMjxMVF1VJTTRegGxzS9ddmcBsUc'
    }
})

export default apiMovies  