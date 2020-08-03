import {database} from '../database/config';
 export function startAddingPost(post){
     return (dispatch) => {
         return database.ref('posts').update({[post.id]: post}).then(() => {
             dispatch(addPost(post))
         })
     }
 }

 export function startLoadingPost(){
     return (dispatch) => {
         return database.ref('posts').once('value').then((snapshot) => {
             let posts = [];
             snapshot.forEach((childSnapshot) => {
                 posts.push(childSnapshot.val());
             })
             dispatch(loadPost(posts));
         })
     }
 }

 export function  startRemovingPost(index , id){
       return (dispatch) => {
           return database.ref(`posts/${id}`).remove().then(() => {
               dispatch(removePost(index));
           })
       }
 }

export function removePost(index){
    return{
        type : 'remove_Post',
        index:index
    }

}

//Add Post

export function addPost(post){
    return{
        type : 'add_post',
        post : post
    }
}

//Add Comment

export function addComment(comment ,postId){
    return{
        type : 'add_comment' ,
        comment: comment,
        postId:postId
    }
}

export function loadPost(posts){
    return {
        type : 'Load_Post',
        posts
    }
}