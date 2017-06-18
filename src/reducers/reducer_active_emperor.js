import {EMPEROR_SELECTED} from '../actions/index';

export default function(state = null, action){
    switch(action.type){
        case EMPEROR_SELECTED:
            return action.payload;
    }

    return state;
}