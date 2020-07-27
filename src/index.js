import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDom from "react-dom";
import Project from "./App";
import {ProductProvider} from './context';

ReactDom.render(
    <ProductProvider>
        <Router>
            <Project />
        </Router>
    </ProductProvider>,
    document.getElementById("root")
    );