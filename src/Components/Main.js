import React , {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';

class Main extends Component {
  constructor(){
    super();
    //to use the this where this  is pointing towards the main component instance
    this.state = {
      posts : [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
        }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
       
    }
    this.removePhotos = this.removePhotos.bind(this);

    
  }
      removePhotos(postremoved){
        console.log(postremoved.description);
        this.setState((state) => ({
          posts : state.posts.filter(post => post !== postremoved)
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
              return <div>
                <Title h1={'Photowall'}/>
                <Photowall posts={this.state.posts} onRemovePhotos={this.removePhotos}/>
 
              </div>
            }
 }

export default Main