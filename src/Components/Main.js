import React , {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './NewPhoto'
import {Route} from 'react-router-dom';

class Main extends Component {
  constructor(){
    super();
    //to use the this where this  is pointing towards the main component instance
    this.state = {
      posts : [{
        id: 0,
        description: "butterfly",
        imageLink: "https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-14-640x360.jpg"
        }, {
        id: 1,
        description: "Blockchain",
        imageLink: "https://cdn.elearningindustry.com/wp-content/uploads/2017/11/how-the-bitcoin-blockchain-is-impacting-the-elearning-industry.png"
        }, {
        id: 2,
        description: "Website overview!",
        imageLink: "https://marketingbitz.com/wp-content/uploads/2018/10/webdesign-3411373_1280.jpg"
       
    }
    this.removePhotos = this.removePhotos.bind(this);

    
  }
      removePhotos(postremoved){
        console.log(postremoved.description);
        this.setState((state) => ({
          posts : state.posts.filter(post => post !== postremoved)
        }))
      }

    addPhoto(postSubmitted){
      this.setState(state => ({
          posts : state.posts.concat([postSubmitted])
      }))

    }

      componentDidMount() {
        //we place any asynchronous code or an data that is being fetched from a database here
        //it runs once the render method is called and everything is displayed to us
      }

      componentDidUpdate(prevProps , prevstate)
      {  //this is called eveytime our component gets updated
 
        console.log(prevstate.posts);
        console.log(this.state);
             

      }

  render(){ 
    console.log(this.state.posts)
              return (
                  <div>
                    <Route exact path = "/" render = {() => (
                      <div>
                        <Title h1={'Photowall'}/>
                        <Photowall posts={this.state.posts} onRemovePhotos={this.removePhotos} onNavigation={this.Nav}/>
                  </div>
            )}/>

             <Route path="/addPhoto" render = {({history}) => (
                   <AddPhoto onAddPhoto={(addedPost) => {
                       this.addPhoto(addedPost);
                       history.push('/');
               }}/>
            )}/>
        </div>
      )
    }              
  }

export default Main