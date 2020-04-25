import React from 'react';
import MainPage from './components/MainPage';
import PostItemContainer from './components/PostItemContainer';
import { Route, Switch } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import ItemDetails from './components/ItemDetails';


function App() {
    return (

        <div className="App">


                
                
            <Switch>
            <Route exact path ="/" component={MainPage} />
            <Route exact path ="/post" component={PostItemContainer}/>
            <Route exact path ="/search" component={SearchResults}/>
            <Route exact path ="/details" component={ItemDetails}/>
            </Switch>
                
        </div>
    )
}

export default App;