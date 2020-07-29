import React , {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
// import AddPhoto from './NewPhoto'
import {Route} from 'react-router-dom';
import {removePost} from '../Redux/actions';

class Main extends Component {
  constructor(){
    super();
       
    }

  render(){ 
    console.log(this.props);
              return (
                  <div>
                    <Route exact path = "/" render = {() => (
                      <div>
                        <Title h1={'Photowall'}/>
                        <Photowall {...this.props}/>
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