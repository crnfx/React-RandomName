import React from "react";
import './main.global.css';
import {hot} from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
// import styles from "./shared/Layout/layout.css"
import { RandomNameFunctional } from "./shared/RandomNameFunctional"
import { RandomNameClass } from "./shared/RandomNameClass"




function  AppComponent() {
    return (
        <Layout>
            <RandomNameFunctional />
            <RandomNameClass />
        </Layout>
    );
}

export const App = hot(AppComponent)