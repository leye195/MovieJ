import * as types from './ActionTypes';

export function nextbtn(){
    return {
        type:types.NEXT_BTN
    };
}
export function previousbtn(){
    return{
        type:types.PREVIOUS_BTN
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
