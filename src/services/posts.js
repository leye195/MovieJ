import axios from 'axios';

export function getAllMovies(page=1,lan="ko-KR"){
    return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=93041e50ffd37dbace90ae54a55c67f3&language="+lan+"&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page);
}
export function getMovieInfo(id,lan="ko-KR"){
    return axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=93041e50ffd37dbace90ae54a55c67f3&language="+lan)
}
export function getReviews(id,lan="ko-KR"){
    return axios.get("https://api.themoviedb.org/3/movie/"+id+"/reviews?api_key=93041e50ffd37dbace90ae54a55c67f3&language="+lan)
}
export function getReview(r_id){
    return axios.get("https://api.themoviedb.org/3/review/"+r_id+"?api_key=93041e50ffd37dbace90ae54a55c67f3");
}
export function getRecommendations(id,lan="ko-KR"){
    return axios.get('https://api.themoviedb.org/3/movie/'+id+'/recommendations?api_key=93041e50ffd37dbace90ae54a55c67f3&language='+lan+'&page=1')
}
export function getSearch(keyword,lan="ko-KR"){
    return axios.get("https://api.themoviedb.org/3/search/movie?api_key=93041e50ffd37dbace90ae54a55c67f3&language="+lan+"&query="+keyword+"&include_adult=true")
}
