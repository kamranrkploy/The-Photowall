import posts from '../Data/posts'
import {combineReducers} from 'redux';

function comments(state={} , action){
    switch(action.type){
        case 'add_comment': 
        if (!state[action.postId]){
        return {...state , [action.postId]:[action.comment]}
        }else{
            return {...state, [action.postId]:[...state[action.postId] , action.comment]}
        }
        case 'load_comment' : return action.comments
        
        default: return state
    }
    
}

function Posts(state=posts , action){
    
    switch(action.type){
        case 'remove_Post': return [...state.slice(0 , action.index) , ...state.slice(action.index + 1)]
        case 'add_post': return [...state , action.post]
        case 'Load_Post' : return action.posts
        default : return state
    }
}

const rootReducer = combineReducers({comments , Posts});

export default rootReducer