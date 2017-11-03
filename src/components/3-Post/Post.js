import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';


class Post extends Component{
  constructor(props){
    super(props);
    console.log(props)

    this.state = {
       post: [],
    }
  }

  componentWillMount(){

    const post_id = this.props.match.params.post_id;

    axios.get('/api/getPost/'+ post_id).then(res=> {

      console.log(res);
      this.setState({post: res.data})
    })




  }

  render(){
    return(
      <div>
        <h1>POST</h1>
        {this.state.post.map(function(item,index){

          return (

          <div className="post-container" key={index}>
            <div className="post-item-title-container">
              <h2>{item.title}</h2>
            </div>
              <img className="post-item-image" src={item.image_url} alt='' />
            <div>
              <h2>{item.price}</h2>
            </div>
              <h2>{item.email}</h2>
            <div>
              <h2 >{item.tag}</h2>
            </div>
            <div>
              <p>{item.description}</p>
            </div>

          </div>
          )
        })}
      </div>
    )
  }
}
export default  Post
