import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {Provider} from "react-redux"
import store from "./store"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render( <BrowserRouter > <Provider store={store}> <App /> </Provider> </BrowserRouter>, document.querySelector("#root"))