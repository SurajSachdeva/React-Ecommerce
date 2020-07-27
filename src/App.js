import React, { Component } from "react";
import {Switch,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Notify from './components/Notify';
import Modal from './components/Modal';

class Project extends Component{

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/details" component={ProductDetails} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/notify" component={Notify} />
                    <Route component={Default} />
                </Switch>
                <Modal/>
               </React.Fragment>
        );
    }
}

export default Project;
