import React, { Component } from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import "./product.less"
import ProductHome from "./home"
import ProductAddUpdate from "./add-update"
import ProductDetail from "./detail"

export default class Product extends Component {
    render() {  
        return (
            <Switch>
               <Route path="/product" exact component={ProductHome}></Route>
               <Route path="/product/addupdate" component={ProductAddUpdate}></Route>
               <Route path="/product/detail" component={ProductDetail}></Route>
               <Redirect to="/product"></Redirect>
            </Switch>
        )
    }
}