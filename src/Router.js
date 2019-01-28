import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import InsideRouterLayout from "./layouts/InsideRouterLayout";
import RouteLayout from "./layouts/RouteLayout";
import CanvasAnimationComponent from "./canvas/components/CanvasAnimationComponent";

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <>
                    <InsideRouterLayout/>
                    <CanvasAnimationComponent/>
                    <RouteLayout>
                        <Route exact path="/" component={ Home }/>
                        <Route path="/about" component={ About }/>
                        <Route path="/skills" component={ Skills }/>
                        <Route path="/projects" component={ Projects }/>
                    </RouteLayout>
                </>
            </BrowserRouter>
        );
    }
}

export default Router;