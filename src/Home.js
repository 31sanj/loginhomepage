import React from 'react';
import {Redirect} from "react-router-dom";


class Home extends React.Component{

    handleLogOut = () => {
        localStorage.setItem("isLoggedIn", false);
        this.props.history.push("/");
    }
    render(){

        const isLoggedIn = localStorage.getItem("isLoggedIn");
        let userData = localStorage.getItem("userdata");
        userData = JSON.parse(userData);
        console.log(isLoggedIn);
        console.log(userData);

        if(isLoggedIn){

        return(
            <div className='flex-container'>    
                <h2>WELCOME TO HOMEPAGE</h2>
                <p>Hello {userData.email}</p>
                <button type='button' className='btn btn-primary' onClick={this.handleLogOut}>Logout</button>
            </div>)
        }
        else{
            return <Redirect to="/" />
        }
    
    }
}

export default Home;