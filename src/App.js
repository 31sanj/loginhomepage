import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Navbar from './components/Navbar';

class App extends React.Component{

    render(){
        return(
           
            <BrowserRouter>
            <Navbar />
            <Route path="/" exact component={Login} />
            <Route path ="/Home" exact component={Home} />                      
            </BrowserRouter>
        );
    }
}

export default App;




