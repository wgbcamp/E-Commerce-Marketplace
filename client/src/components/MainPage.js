import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import SearchAppBar from "./headerBar";
import ItemCard from "./ItemCard";
import ItemCardPurchased from "./ItemCardPurchased";
import PostItem from "./PostItem";
import Button from '@material-ui/core/Button';
import api from "../utils/api";
import FileUpload from "./FileUpload";


class MainPage extends Component {
state = {
    search: "",
    itemData: [],

    PostItemName: "",
    PostItemAmount: "",
    PostItemCategory: "",
    PostItemCondition: "",
    PostItemPrice: "",
    PostItemShippingCost: "",
    PostItemDescription: "",
    PostItemImage: "",

    itemToDelete: "",

    purchasedItems: []
};

componentDidMount(){
    this.readItem();
    this.readPurchases();
}

handleInputChange = event=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
    });
}



readItem = () => {
    api.readItem()
        .then((res) => {
            this.setState({ itemData: res.data });
        })
        .catch((err) => console.log(err));
};

readPurchases = () => {
    api.readPurchases()
        .then((res) => {
            this.setState({ purchasedItems: res.data });
        })
        .catch((err) => console.log(err));
}

postItem = () =>{
    var data = {
        item : this.state.PostItemName,
        quantity: this.state.PostItemAmount,
        type: this.state.PostItemAmount,
        condition: this.state.PostItemCondition,
        price: this.state.PostItemPrice,
        shipping: this.state.PostItemShippingCost,
        description: this.state.PostItemDescription,
        image: this.state.PostItemImage
    };

    api.postItem(data)
        .then(()=>{
            this.readItem()
        })

};

deleteItem = (id, event) =>{
    event.preventDefault();

console.log("This is the ID to Delete");
console.log(id);
var thingToDelete = {
    thingID: id
}

    api.deleteItem(thingToDelete)
        .then(()=>{
            this.readItem()
        })
};

purchaseItem = (index) =>{
    var data = {
        item : this.state.itemData[index].item,
        quantity: this.state.itemData[index].quantity,
        type: this.state.itemData[index].type,
        condition: this.state.itemData[index].condition,
        price: this.state.itemData[index].price,
        shipping: this.state.itemData[index].shipping,
        description: this.state.itemData[index].description,
        image: this.state.itemData[index].image
    };
    console.log(data);

    api.purchaseItem(data)
        .then(()=>{
            this.readPurchases()
        })
}



render(){
    return (
        
        <div>
            <SearchAppBar 
                search={this.state.search}
                handleInputChange={this.handleInputChange}
            />
            <br></br>
            <h2>Items for Sale:</h2>
            <br></br>
            <Grid container spacing={3}>
            <Grid item xs={9}>
            <Grid container spacing={3}>
            {[...this.state.itemData].map((e, index)=>
            <Grid item xs={4}>
            <ItemCard
                key={e._id}
                image={"." + e.image}
                title={e.item}
                description={e.description}
                price={"$" + e.price}
                shipping={e.shipping}
                id={e._id} 
                deleteItem={this.deleteItem}
                purchaseItem={this.purchaseItem.bind(this, index)}
            />

            </Grid>
            )}
            </Grid>
            </Grid>
            <Grid item xs={3}>
            <PostItem
                handleInputChange={this.handleInputChange}
                postItemName={this.state.PostItemName}
                postItemAmount={this.state.postItemAmount}
                postItemCategory={this.state.postItemCategory}
                postItemCondition={this.state.postItemCondition}
                postItemPrice={this.state.postItemPrice}
                postItemShippingCost={this.state.postItemShippingCost}
                postItemDescription={this.state.postItemDescription}
                postItemImage={this.state.postItemImage}
                postItem={this.postItem}
                

            />
            
            </Grid>
            </Grid>



            <br></br>
            <h2>Purchased Items:</h2>
            <br></br>
            <Grid container spacing={3}>
            <Grid item xs={9}>
            <Grid container spacing={3}>
            {[...this.state.purchasedItems].map((e, index)=>
            <Grid item xs={4}>
            <ItemCardPurchased
                image={"." + e.image}
                title={e.item}
                description={e.description}
                price={"$" + e.price}
                shipping={e.shipping}
                id={e._id} 
                deleteItem={this.deleteItem.bind(this, index)}
                purchaseItem={this.purchaseItem.bind(this, index)}
            />

            </Grid>
            )}
            </Grid>
            </Grid>
            <Grid item xs={3}>
            
            </Grid>
            </Grid>
        </div>
    )
}
};

export default MainPage;