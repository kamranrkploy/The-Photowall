import React from 'react'; //if you are using class make sure to include : {Component}
import proptypes from 'prop-types';

//so if we are using only the render method of component class we can rather create a function only

function Photo(props){

    const post = props.post;

    return      <figure className="figure"> 
            <img  className="photo" src={post.imageLink} alt={post.description} />
                        <figcaption> <p> {post.description} </p> </figcaption>
            <div className="button-container"> 
                    <button className="remove" onClick = { () => 
                    {
                        props.removePost(props.index);
                    }}>Remove</button>
            </div>
                </figure>

}

//props below should be same as those defined in the photowall.js 
        Photo.prototype = {
                        post: proptypes.object.isRequired  ,
             }

export default Photo