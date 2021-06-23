import axios from 'axios';
import React, { Component } from 'react';

class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null, 
      address: null,
      rating: null,
    };
  }
  // Mounted
  componentDidMount() {
    axios.get(`http://localhost:3000/restaurant/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          name:response.data.name,
          id:response.data.id,
          email:response.data.email,
          address:response.data.address,
          rating:response.data.rating
        })
      });
  }
  // update
  update(){
    axios.put(`http://localhost:3000/restaurant/${this.state.id}`,this.state)
    .then(response =>{
    })
  }
  render() {
    return (
      <div>
        <h1>Restaurant Update</h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Name"
            value={this.state.name}
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
            placeholder="Email"
            value={this.state.email}
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ rating: event.target.value });
            }}
            placeholder="Rating"
            value={this.state.rating}
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
            placeholder="Address"
            value={this.state.address}
          />
          <br />
          <br />
          <button
            onClick={() => {
              this.update();
            }}
          >
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurantUpdate;