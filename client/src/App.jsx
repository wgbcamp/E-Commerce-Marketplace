import React from 'react';
import MainPage from './components/MainPage/MainPage';
import PostItemContainer from './components/PostItem/PostItemContainer';
import { Route, Switch } from 'react-router-dom';
import SearchResults from './components/SearchResults/SearchResults';
import ItemDetails from './components/ItemDetails/ItemDetails';
import SignUp from './components/AccountPages/SignUp';
import SellerHistory from './components/SellerHistory/SellerHistory';
import SellerItemDetails from './components/SellerHistory/SellerItemDetails';
import OrderHistory from './components/OrderHistory/OrderHistory';
import BuyerItemDetails from './components/OrderHistory/BuyerItemDetails.js'

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
            <Route exact path ="/buyerdetails" component={BuyerItemDetails}/>
            </Switch>
                
        </div>
    )
}

export default App;