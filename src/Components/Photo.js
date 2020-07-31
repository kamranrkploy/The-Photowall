import React from 'react'; 
import proptypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photo(props)
   {
     const post = props.post;
         return   <figure className="figure"> 
                    <Link to={`/post/${post.id}`}><img  className="photo" src={post.imageLink} alt={post.description} /></Link>
                         <figcaption> <p> {post.description} </p> </figcaption>
                     <div className="button-container"> 
                         <button className="remove" onClick = { () => {
                        props.removePost(props.index);
                      props.history.push('/')
                   }}>Remove</button>
                   {/* <Link className="button" to={`/post/${post.id}`}>
            <div className="comment-count">
                <div className="speech-bubble"></div>
                {props.comments[post.id] ? props.comments[post.id].lenght : 0}
            </div>
                   </Link> */}
                     </div>
                  </figure>

}

//props below should be same as those defined in the photowall.js 
        Photo.prototype = {
                        post: proptypes.object.isRequired  ,
             }

export default Photo