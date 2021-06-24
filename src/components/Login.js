import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
    constructor(){
        super();
        this.state ={
            name:'',
            password:''
        }
    }
    // login
    login(){
    axios.get(`http://localhost:3000/login?q=${this.state.name}`)
    .then(response=>{
        // console.log(response);
        if(response.data.length>0){
            if (response.data[0].name === this.state.name && response.data.[0].password === this.state.password) {
                console.log(this.props.history.push('list'));
            }else{
                alert("Username or Password is incorrect")
            }
        }else{
            alert("Please check username and password")
        }
    });

    }
    render() {
        return (
            <div>
                <h4>Login</h4>
                <input type="text" name="name" onChange={(event) =>{this.setState({name:event.target.value})}} placeholder="name"/>
                <br/>
                <br/>
                <input type="password" name="password" onChange={(event) =>{this.setState({password:event.target.value})}}  placeholder="password"/>
                <br/>
                <br/>
                <button onClick={()=>{this.login()}}>Login</button>
            </div>
        );
    }
}

export default Login;