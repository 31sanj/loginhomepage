import React from 'react';
import Navbar from './components/Navbar';


class Login extends React.Component{
    constructor(props){
    super(props);
    this.state={};
    }

    handleLogin = (evt) =>{
        evt.preventDefault();
        const form = new FormData(evt.target);

        let postData ={};

        for(let pair of form.entries()){
            
            postData[pair[0]] = pair[1];
        }

        console.log(postData);

        const{email,pwd} = postData;

        if (email && pwd){
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("userdata", JSON.stringify(postData));
            this.props.history.push("/Home");
        }

    }
    render(){
        return(
   
            <div className='container'>

                <Navbar />

                <form className='form' onSubmit={this.handleLogin}>

                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="txt" className="form-control" placeholder="Enter email" name="email"/>
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="pwd"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
    
        )
    }
}

export default Login; 