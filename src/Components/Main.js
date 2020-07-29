import React , {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './NewPhoto'
import {Route} from 'react-router-dom';

class Main extends Component {
  constructor(){
    super();
       
    }


  render(){ 
              return (
                  <div>
                    <Route exact path = "/" render = {() => (
                      <div>
                        <Title h1={'Photowall'}/>
                        <Photowall posts={this.props.posts}/>
                  </div>
            )}/>
{/* 
             <Route path="/addPhoto" render = {({history}) => (
                   <AddPhoto onAddPhoto={(addedPost) => {
                       this.addPhoto(addedPost);
                       history.push('/');
               }}/>
            )}/> */}
        </div>
      )
    }              
  }

export default Main