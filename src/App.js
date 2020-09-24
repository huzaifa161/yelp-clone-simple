import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantDetail from './pages/RestaurantDetail';
import UpdateRestaurant from './pages/UpdateRestaurant';

import './App.css';
import RestaurantsContext from './context/RestaurantsContext';

const App = () => {
    return (
        <Router>
            <RestaurantsContext>
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/restaurants/:id' component={RestaurantDetail} />
                    <Route exact path='/restaurants/:id/update' component={UpdateRestaurant} /> 
 
                </Switch>
            </div>
            </RestaurantsContext>
        </Router>
    )
};

export default App;