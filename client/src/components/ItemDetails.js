import React, { Component } from "react";
import HeaderBar from './HeaderBar';
import ItemDetailsCard from './ItemDetailsCard';
import api from "../utils/api";

class ItemDetails extends Component {

    state = {
        search: "",
        currentUser: "",
        itemData: [{
            _id: "",
            name: "",
            quantity: "",
            type: "",
            condition: "",
            price: "",
            shippingCost: "",
            description: "",
            image: "",
            itemSeller: "",
            type: ""
        }]
    };

    componentDidMount(){
        var data = {
            search: localStorage.getItem("itemID")
        };

        api.readItemByID(data)
        .then((res) =>{
            this.setState({ itemData: res.data })
        })
        .catch((err) => console.log(err));

        
        var x = {
            account: localStorage.getItem("account")
          }
  
          this.setState({ currentUser: x.account})

          api.itemSeller(x)
            .then((res)=>{
              console.log(res);
              this.setState({ itemSeller: res.data[0].username });
            })
      
        
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

    purchaseItem = () =>{
        var data = {
        name : this.state.itemData[0].name,
        quantity: this.state.itemData[0].quantity,
        type: this.state.itemData[0].type,
        condition: this.state.itemData[0].condition,
        price: this.state.itemData[0].price,
        shippingCost: this.state.itemData[0].shippingCost,
        description: this.state.itemData[0].description,
        image: this.state.itemData[0].image,
        itemBuyer: this.state.currentUser
        };

        console.log(data);
    
        var id = this.state.itemData[0]._id;
        var thingToDelete = {
            thingID: id
        }

        api.purchaseItem(data)
            .then((res) =>{
                console.log(res)

                api.deleteItem(thingToDelete)
                
            });
        
            
    }
 
    updateItem = () =>{
        var thingToUpdate ={
            thingID: this.state.itemData[0]._id
        }
        api.updateItem(thingToUpdate);
    }

    render(){
        return (
            <div>
            <HeaderBar
                handleInputChange={this.handleInputChange}
                saveCookie={this.saveCookie}
                />

            <ItemDetailsCard
            key={this.state.itemData[0]._id}
            image={"." + this.state.itemData[0].image}
            title={this.state.itemData[0].name}
            description={this.state.itemData[0].description}
            price={"$" + this.state.itemData[0].price}
            shipping={"Shipping: " + this.state.itemData[0].shippingCost}
            id={this.state.itemData[0]._id}
            image={this.state.itemData[0].image}
            itemSeller={"Seller: " + this.state.itemData[0].itemSeller}
            type={"Category: " + this.state.itemData[0].type}
            purchaseItem={this.purchaseItem}
            updateItem={this.updateItem}
            />
            </div>
        )
    }
}

export default ItemDetails;