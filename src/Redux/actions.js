//remove post

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