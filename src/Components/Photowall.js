import React, { Component } from 'react';
import Photo from './Photo';
import propTypes from 'prop-types';

function Photowall(props){

            return  <div>
                    <a href="#addPhoto"  onClick ={props.onNavigation} className="Add"> ADD </a>
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




        //Using class and then extending it with component class

        // class Photowall extends Component {

        //     render(){
        //         return <div className="photoGrid">
        //             {this.props.posts.map((post , index) => <Photo key={index} post={post}/>)}
        //         </div>
        //     }
        // }

export default Photowall