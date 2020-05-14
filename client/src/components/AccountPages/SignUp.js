import React, { Component } from "react";
import api from "../../utils/api";
import PostItemFields from "../PostItem/PostItemFields";
import HeaderBar from '../HeaderBar/HeaderBar';
import AccountField from './AccountFields';
import SignedInFields from './SignedInFields';
import SignedOutFields from './SignedOutFields';



class SignUp extends Component {
    
    
    componentDidMount(){
        if( localStorage.getItem("account") == (null) || localStorage.getItem("account") == ""){
            
            this.setState({
                loggedOut: true
            })
          }   
      }
    

    state = {
        search: "",
        username: "",
        password: "",
        uniqueID: Math.random() + Date.now()
    };

    handleInputChange = event=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    saveCookie = () =>{
        localStorage.setItem("search", this.state.search);
    }

    signUp = () =>{

        

        var data = {
            username: this.state.username,
            password: this.state.password,
            uniqueID: this.state.uniqueID
        }

        alert("Your account, " + data.username + " has been registered.");

        
        api.signUp(data)
            .then((res) => {
                console.log(res);

            })
        
        
    }
    
    signIn = () => {
        var data = {
            username: this.state.username,
            password: this.state.password,
            uniqueID: this.state.uniqueID
        }

        
        alert(data.username + " has signed in.");
        api.signIn(data)
            .then((res) =>{
                console.log(res);
                localStorage.setItem("account", res.data[0].uniqueID);
                window.location.reload(true);
            })
            
    }
    
    logOut = () =>{
        localStorage.setItem("account", "");
    }
    
    render(){
        const loggedOut = this.state.loggedOut;
        if(loggedOut){
            
            return <SignedOutFields
            handleInputChange={this.handleInputChange}
            signUp={this.signUp}
            signIn={this.signIn}
            />

        }else{
            

            return <SignedInFields
            logOut={this.logOut}
            />
        }

    }
}

export default SignUp;