import * as types from './ActionTypes';

export function nextbtn(cur_page){
    return {
        type:types.NEXT_BTN,
        cur_page
    };
}
export function previousbtn(cur_page){
    return{
        type:types.PREVIOUS_BTN,
        cur_page
    };
}
export function view(view){
    return{
        type:types.VIEW,
        view
    }
}
export function get_movielist(movie_list,total_pages,cur_page){
    return{
        type:types.MOVIELIST,
        movie_list,
        total_pages,
        cur_page,
    };
}
export function get_keyword(keyword){
    return{
        type:types.KEYWORD,
        keyword
    }
}
export function search(results){
    return{
        type:types.SEARCH,
        results,
    };
}
export function language(lan){
    return{
        type:types.LANGUAGE,
        lan
    }
}
export function actor_info(actor){
    return{
        type:types.ACTOR_INFO,
        actor
    }
}
