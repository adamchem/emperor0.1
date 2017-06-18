import {POST_ORDER} from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case POST_ORDER:
            return action.payload;
    }

    return state;
}