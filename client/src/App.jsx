import React from 'react';
import MainPage from './components/MainPage';
import PostItemContainer from './components/PostItemContainer';
import { Route, Switch } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import ItemDetails from './components/ItemDetails';
import SignUp from './components/SignUp';
import SellerHistory from './components/SellerHistory';
import SellerItemDetails from './components/SellerItemDetails';
import OrderHistory from './components/OrderHistory';

function App() {
    return (

        <div className="App">


                
                
            <Switch>
            <Route exact path ="/" component={MainPage} />
            <Route exact path ="/post" component={PostItemContainer}/>
            <Route exact path ="/search" component={SearchResults}/>
            <Route exact path ="/details" component={ItemDetails}/>
            <Route exact path ="/signup" component={SignUp}/>
            <Route exact path ="/sellerHistory" component={SellerHistory}/>
            <Route exact path ="/orderHistory" component={OrderHistory}/>
            <Route exact path ="/sellerdetails" component={SellerItemDetails}/>
            </Switch>
                
        </div>
    )
}

export default App;