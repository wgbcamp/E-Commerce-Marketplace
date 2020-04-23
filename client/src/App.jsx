import React from 'react';
import MainPage from './components/MainPage';
import PostItem2 from './components/PostItemFields';
import PostItemContainer from './components/PostItemContainer';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
    return (

        <div className="App">

            <Switch>
            <Route exact path ="/" component={MainPage} />
            <Route exact path ="/post" component={PostItemContainer}/>
            </Switch>
        </div>
    )
}

export default App;