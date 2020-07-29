import React , {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './NewPhoto'
import {Route, Link} from 'react-router-dom';
import {removePost} from '../Redux/actions';

class Main extends Component {
  constructor(){
    super();
       
    }

  render(){ 
    console.log(this.props);
              return (
                  <div>
                    <h1><Link to="/">Photowall</Link></h1>
                    <Route exact path = "/" render = {() => (
                      <div>
                        <Photowall {...this.props}/>
                  </div>
            )}/>

             <Route path="/addPhoto" render = {({history}) => (
                   <AddPhoto {...this.props} onHistory={history}/>
            )}/>
        </div>
      )
    }              
  }

export default Main