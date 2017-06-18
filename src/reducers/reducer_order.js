import { ORDER_BOOK } from '../actions/index';

export default function(state = null, action){
    var add = parseInt(action.payload);

    if(state == undefined){
        state = parseInt(0);
    }
    if(!action.payload){
        add = parseInt(0);
    }

    switch(action.type){
        case ORDER_BOOK:
            return state + add;
    }

    return state;
};