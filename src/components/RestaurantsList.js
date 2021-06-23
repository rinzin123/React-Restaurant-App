import React, { Component } from 'react';
import axios from 'axios';

class RestaurantsList extends Component {
    constructor(){
        super();
        this.state ={
            list:null
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3000/restaurant")
        .then(response=>{
            this.setState({list:response.data})
        });
    }
    render() {
        console.log(this.state);

        return (
          <div>
            <h1>Restaurants List</h1>
            {this.state.list ? (
              <div>
                {this.state.list.map((item, i) => (
                  <div key={i} className="list-wrapper">
                    <span>{item.name}</span>
                    <span>{item.email}</span>
                    <span>{item.rating}</span>
                    <span>{item.address}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p>Please Wait</p>
            )}
          </div>
        );
    }
}

export default RestaurantsList;