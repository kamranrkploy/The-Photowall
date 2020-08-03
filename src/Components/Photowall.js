import React from 'react';               // make sure to add {Component} if you are using class instead of function
import Photo from './Photo';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photowall(props){

            return  <div>
                    <Link className="Add" to="/addPhoto"> ADD </Link>
                     <div className="photoGrid">
                     {props.posts
                    .sort(function(x,y){
                        return  y.id - x.id
                    })
                       .map((post , index) => <Photo key={index} post={post} {...props} index={index}/>)}
                    </div>
                </div>
                }

//make sure that the names of props here and in the main.js inside render method are same

Photowall.propTypes = {
            posts :  propTypes.array.isRequired ,//make sure that props of type post is in the form of array that is required always

               }

export default Photowall