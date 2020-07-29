import posts from '../Data/posts'

const PostReducer = function Posts(state=posts , action){
    
    switch(action.type){
        case 'remove_Post': return [...state.slice(0 , action.index) , ...state.slice(action.index + 1)]
        case 'add_post': return [...state , action.post]
        default : return state
    }
}


export default PostReducer