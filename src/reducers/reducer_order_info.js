import {FETCH_POSTS} from '../actions/index';

export default function(state = [], action){
    if(action.payload==undefined){
        return [];
    }
    
    switch(action.type){
        case FETCH_POSTS:
            return action.payload;
    }

    return state;
}