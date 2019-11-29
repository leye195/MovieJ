import * as types from './ActionTypes';

/*SET PAGE */
export function page(cur_page){
    return {
        type:types.PAGE,
        cur_page
    };
}

/*Button for Next,Previous and View */
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

/*GET MOVIE DATA LIST*/
export function get_movielist(movie_list,total_pages,cur_page){
    return{
        type:types.MOVIELIST,
        movie_list,
        total_pages,
        cur_page,
    };
}

/*SEARCH*/
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

/*LANGUAGE*/
export function language(lan){
    return{
        type:types.LANGUAGE,
        lan
    }
}
/*ACTOR INFORMATION*/
export function actor_info(actor){
    return{
        type:types.ACTOR_INFO,
        actor
    }
}
export function loading(completed){
    return{
        type:types.LOADING,
        completed
    }
}

/*LOGIN*/
export function login(){
    return{
        type:types.LOGIN
    };
}
export function loginSuccess(name){
    return{
        type:types.LOGIN_SUCCESS,
        name
    };
}
export function loginFailure(){
    return{
        type:types.LOGIN_FAILURE
    };
}