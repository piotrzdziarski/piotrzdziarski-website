import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/about" component={ About }/>
                    <Route path="/skills" component={ Skills }/>
                    <Route path="/projects" component={ Projects }/>
                </>
            </BrowserRouter>
        );
    }
}

export default Router;