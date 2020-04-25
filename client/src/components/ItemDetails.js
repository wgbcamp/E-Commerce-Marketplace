import React, { Component } from "react";
import HeaderBar from './HeaderBar';
import ItemDetailsCard from './ItemDetailsCard';

class ItemDetails extends Component {

    state = {
        search: ""
    };

    componentDidMount(){
        
    }

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

    render(){
        return (
            <div>
            <HeaderBar
                handleInputChange={this.handleInputChange}
                saveCookie={this.saveCookie}
                />

            <ItemDetailsCard
            />
            </div>
        )
    }
}

export default ItemDetails;