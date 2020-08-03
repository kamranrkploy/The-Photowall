import React , {Component} from 'react';
import Photowall from './Photowall';
import AddPhoto from './NewPhoto'
import {Route, Link} from 'react-router-dom';
// import {removePost} from '../Redux/actions';
import Single from './single';

class Main extends Component {

  state = {loading : true }
 
componentDidMount(){
  this.props.startLoadingPost().then(() => {
    this.setState({loading : false})
  })
  this.props.startLoadingComments()
}

  render(){ 
    // console.log(this.props);
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

            <Route exact path="/single/:id" render = {(params) => (
                <Single loading={this.state.loading} {...this.props} {...params} />
            )}/>
        </div>
      )
    }              
  }

export default Main