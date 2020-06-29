import React, { Component } from "react"
import { Redirect,Switch,Route } from "react-router-dom"
import { Layout } from 'antd';
import memorySave from "../../utils/memorySave"
import LeftNav from "../../components/left-nav"
import Header from "../../components/header"

import Home from "../home/home"
import Category from "../category/category"
import Product from "../product/product"
import Role from "../role/role"
import User from "../user/user"
import Bar from "../charts/bar"
import Line from "../charts/line"
import Pie from "../charts/pie"

const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    render() {   // render是渲染一个jsx
        let user = memorySave.user;
        // 判断有没有登录（判断内存中有没有user）
        if (!user || !user._id) {
            // 内存中没有用户信息（没有登录）
            // this.props.history.replace("/login")
            return <Redirect to="/login"></Redirect>
        }
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Switch>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/category" component={Category}></Route>
                            <Route path="/product" component={Product}></Route>
                            <Route path="/role" component={Role}></Route>
                            <Route path="/user" component={User}></Route>
                            <Route path="/bar" component={Bar}></Route>
                            <Route path="/line" component={Line}></Route>
                            <Route path="/pie" component={Pie}></Route>
                            <Redirect to="/home"></Redirect>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:"center",color:"#aaa"}}>学习react so easy~</Footer>
                </Layout>
            </Layout>
        )
    }
}
