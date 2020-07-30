import posts from '../Data/posts'
import {combineReducers} from 'redux';

function comments(state=[] , action){
    switch(action.type){
        case 'add_comment': return [...state , action.comment]
        default: return state
    }
    
}

function Posts(state=posts , action){
    
    switch(action.type){
        case 'remove_Post': return [...state.slice(0 , action.index) , ...state.slice(action.index + 1)]
        case 'add_post': return [...state , action.post]
        default : return state
    }
}

const rootReducer = combineReducers({comments , Posts});

export default rootReducer