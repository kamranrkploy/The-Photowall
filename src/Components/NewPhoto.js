import React , {Component} from 'react';


class AddPhoto extends Component {
     constructor(){
          super();
          this.SubmitPost = this.SubmitPost.bind(this);
     }
     
     SubmitPost(event){
          event.preventDefault();
          const imageLink = event.target.elements.link.value;
          const description = event.target.elements.description.value;
          const post = {
               id:Number(new Date()) ,
               description: description,
               imageLink: imageLink
          }
          if(description && imageLink){
               this.props.onAddPhoto(post);
          }
          else if(!description && !imageLink){
               window.alert("please provide a link and a description");
          }
          else if(description){
               window.alert("please provide a valid link to an image.")
          }
          else{
               window.alert("please give a relatable description for your image.")
          }
     }



     render(){
       
                return <div>
                  <h1> Photowall </h1>
                       <form className="form" onSubmit={this.SubmitPost}>
                            <input type="text"  placeholder="Link" name="link"/>
                            <input type="text"  placeholder="Description" name="description"/>
                           <button>Post</button>
                      </form>
                      </div>
              } 
    }

export default AddPhoto