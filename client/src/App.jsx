import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import SearchAppBar from "./components/headerBar";
import ItemCard from "./components/ItemCard";
import PostItem from "./components/PostItem";
import api from "./utils/api";

class App extends Component {
state = {
    search: "",
    itemData: []
};

componentDidMount(){
    this.readItem();
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
            console.log("test" + res);
        })
        .catch((err) => console.log(err));
};

// postItem = () => {
//     api.postItem()
//         .then(())
// }

render(){
    return (
        <div>
            <SearchAppBar 
                search={this.state.search}
                handleInputChange={this.handleInputChange}
            />
            <br></br>
            <Grid container spacing={3}>
            <Grid item xs={9}>
            <Grid container spacing={3}>
            {[...this.state.itemData].map((e)=>
            <Grid item xs={4}>
            <ItemCard
                image={"." + e.image}
                title={e.item}
                description={e.description}
                price={"$" + e.price}
                shipping={e.shipping}
            />
            </Grid>
            )}
            </Grid>
            </Grid>
            <Grid item xs={3}>
            <PostItem></PostItem>
            </Grid>
            </Grid>
            
        </div>
    )
}
};

export default App;