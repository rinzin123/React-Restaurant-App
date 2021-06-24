import axios from 'axios';
import React, { Component } from 'react';
// bootstrap
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import NavBar from "./NavBar";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
class RestaurantsList extends Component {
    constructor(){
        super();
        this.state ={
            list:null
        }
    }
    getData(){
      axios.get("http://localhost:3000/restaurant")
      .then(response=>{
          this.setState({list:response.data})
      });
    }
    // Mounted
    componentDidMount(){
      this.getData()
    }
    // delete
    delete(id){
        // let confirmBox = confirm("Are you sure want to Delete!!!");
        // if(confirmBox === true){
              axios.delete(`http://localhost:3000/restaurant/${id}`)
              .then(response=>{
                this.getData();
              })

        // }

    }
    render() {
        return (
          <div>
            <NavBar />

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
                        <td>
                          <Link to={`/update/${item.id}`}>
                            <FontAwesomeIcon icon={faEdit} color="orange" />
                          </Link>
                        </td>
                        <td>
                          <span onClick={() => this.delete(item.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} color="red" />
                          </span>
                        </td>
                        <td>
                          <Link to="/detail">View</Link>
                        </td>
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