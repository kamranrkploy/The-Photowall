import React from 'react'; //if you are using class make sure to include : {Component}
import proptypes from 'prop-types';

//so if we are using only the render method of component class we can rather create a function only

function Photo(props){

    const post = props.post;

    return <figure className="figure"> 
    <img  className="photo" src={post.imageLink} alt={post.description} />
    <figcaption> <p> {post.description} </p> </figcaption>
    <div className="button-container"> 
        <button className="remove" onClick = { () => {
            props.onRemovePhotos(post);
        }}>Remove</button>
    </div>
    </figure>

}

//props below should be same as those defined in the photowall.js 
Photo.prototype = {
    post: proptypes.object.isRequired  ,
    onRemovePhotos : proptypes.func.isRequired
}







//using class
// class Photo extends Component {
//     render(){
//     const post = this.props.post;

//     return <figure className="figure"> 
//     <img  className="photo" src={post.imageLink} alt={post.description} />
//     <figcaption> <p> {post.description} </p> </figcaption>
//     <div className="button-container"> 
//         <button className="remove">Remove</button>
//     </div>
//     </figure>
// }
// }

export default Photo