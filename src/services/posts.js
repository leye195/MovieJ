import axios from 'axios';

export function getAllMovies(page=1){
    return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=93041e50ffd37dbace90ae54a55c67f3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page);
}
export function getMovieInfo(id){
    return axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=93041e50ffd37dbace90ae54a55c67f3&language=en-US")
}
