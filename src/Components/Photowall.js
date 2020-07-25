import React from 'react';               // make sure to add {Component} if you are using class instead of function
import Photo from './Photo';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photowall(props){

            return  <div>
                     { /* we remove the onclick EventHandler as now components will take care of the ui */ }
                    <Link to="/addPhoto" className="Add"> ADD </Link>
                     <div className="photoGrid">
                       {props.posts.map((post , index) => <Photo key={index} post={post} onRemovePhotos={props.onRemovePhotos}/>)}
                    </div>
                </div>
                }

//make sure that the names of props here and in the main.js inside render method are same

Photowall.propTypes = {
            posts :  propTypes.array.isRequired ,//make sure that props of type post is in the form of array that is required always
            onRemovePhotos : propTypes.func.isRequired //if not a function we ll be thrown a big error

               }

export default Photowall