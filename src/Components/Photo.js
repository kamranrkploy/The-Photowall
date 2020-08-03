import React from 'react'; 
import proptypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photo(props)
   {
     const post = props.post;
         return   <figure className="figure"> 
                    <Link to={`/single/${post.id}`}><img  className="photo" src={post.imageLink} alt={post.description} /></Link>
                         <figcaption> <p> {post.description} </p> </figcaption>
                     <div className="button-container"> 
                         <button className="remove" onClick = { () => {
                        props.startRemovingPost(props.index ,post.id);
                      props.history.push('/')
                   }}>Remove</button>
                     </div>
                  </figure>

}

//props below should be same as those defined in the photowall.js 
        Photo.prototype = {
                        post: proptypes.object.isRequired  ,
             }

export default Photo