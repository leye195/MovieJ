import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()
const API_KEY=process.env.MOVIE_API;
export const getAllMovies=(page=1,lan="en-US")=>{
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${lan}"&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
}
export const getMovieInfo=(id,lan="en-US")=>{
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${lan}`)
}
export const getReviews=(id,lan="en-US")=>{
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=${lan}`)
}
export const getReview=(r_id)=>{
    return axios.get(`https://api.themoviedb.org/3/review/${r_id}?api_key=${API_KEY}`);
}
export const getRecommendations=(id,lan="en-US")=>{
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=${lan}&page=1`)
}
export const getSearch=(keyword,lan="en-US")=>{
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${lan}&query=${keyword}&include_adult=false`)
}
export const getCredits=(id)=>{
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
}
export const movie_credit=(person_id,lan="en-US")=>{
    return axios.get(`https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${API_KEY}&language=${lan}`);
}
export const get_actor_img=(person_id)=>{
    return axios.get(`https://api.themoviedb.org/3/person/${person_id}/images?api_key=${API_KEY}`);
}

export const get_actor_info=(person_id)=>{
    return axios.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=${API_KEY}`);
}

//get movie video info 
export const get_video=(id)=>{ 
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
}

export const signup=(id,pwd)=>{
    return axios.post(`http://localhost:8080/api/users`,{params:{name:id,password:pwd}});
}
export const login=(id,pw)=>{
    return axios.post(`http://localhost:8080/api/users/login`,{id:id,password:pw});
};
export const logout=()=>{
    return axios.get(`http://localhost:8080/api/users/logout`);
}