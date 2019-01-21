import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={ Home }/>
            </BrowserRouter>
        );
    }
}

export default Router;