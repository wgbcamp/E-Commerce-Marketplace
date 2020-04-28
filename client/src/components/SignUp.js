import React, { Component } from "react";
import api from "../utils/api";
import PostItemFields from "./PostItemFields";
import HeaderBar from './HeaderBar';
import AccountField from './AccountFields';

class SignUp extends Component {

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

        api.signIn(data)
            .then((res) =>{
                console.log(res);
                localStorage.setItem("account", res.data[0].uniqueID);
            })
    }
    
    logOut = () =>{
        localStorage.setItem("account", "");
    }
    
    render(){
        return (
            <div>
                <HeaderBar
                handleInputChange={this.handleInputChange}
                saveCookie={this.saveCookie}
                />
                <AccountField
                handleInputChange={this.handleInputChange}
                signUp={this.signUp}
                signIn={this.signIn}
                logOut={this.logOut}
                />
            </div>
        )
    }
}

export default SignUp;