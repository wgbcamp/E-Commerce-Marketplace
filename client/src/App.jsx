import React, { Component } from "react";
import SearchAppBar from "./components/headerBar";
import api from "./utils/api";

class App extends Component {
state = {
    search: "",
    fruits: []
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
            this.setState({ fruits: res.data });
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
            
        </div>
    )
}
};

export default App;