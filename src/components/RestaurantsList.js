import axios from 'axios';
import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
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
        return (
          <div>
            <h1>Restaurants List</h1>
            {this.state.list ? (
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Rating</th>
                      <th>Location</th>
                      <th>View</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.list.map((item, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>
                        <td>{item.address}</td>
                        <td><Link to={`/update/${item.id}`}>Edit</Link></td>
                        <td><Link to="/delete">Delete</Link></td>
                        <td><Link to="/detail">View</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            ) : (
              <p>Please Wait</p>
            )}
          </div>
        );
    }
}

export default RestaurantsList;