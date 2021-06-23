import React, { Component } from 'react';
import axios from 'axios';
class RestaurantCreate extends Component {
  constructor(){
    super();
    this.state={
      name:null,
      email:null,
      address:null,
      rating:null
    }
  }
  // store
  create(){
    console.log(this.state);
    axios.post("http://localhost:3000/restaurant",this.state)
    .then(response=>{
      console.log(response);
    });
  }
    render() {
        return (
          <div>
            <h1>Restaurant Create</h1>
            <div>
              <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Name"/>
              <br/>
              <br/>
              <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Email"/>
              <br/>
              <br/>
              <input onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Rating"/>
              <br/>
              <br/>
              <input onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Address"/>
              <br/>
              <br/>
              <button onClick={()=>{this.create()}}>Create</button>
            </div>
          </div>
        );
    }
}

export default RestaurantCreate;