import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { Form, Input, Button, message } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.less"
import { reqLogin } from "../../api/index"
import memorySave from "../../utils/memorySave"
import localstorageSave from "../../utils/localstorageSave"


export default class Login extends Component {
    onFinish = async values => {
        // console.log('Received values of form: ', values);
        let {username,password} = values;
        // 发请求ajax请求  
        // reqLogin(username,password).then(response=>{
        //     console.log("成功了",response.data)
        // }).catch(error=>{
        //     console.log("失败了",error)
        // })  
        
        // 改写一
        // const response = await reqLogin(username,password);
        // console.log("成功了",response.data)

        // 使用try catch捕获错误(针对 async和await)
        // try{
        //     const response = await reqLogin(username,password);
        //     console.log("成功了",response.data)
        // }catch(error){
        //     console.log("失败了",error)
        // }

        // 要不使用try catch 可以在封装ajax时，统一处理失败
        // 如果统一处理了就是使用async和await了，并且不使用try catch
        const response = await reqLogin(username,password);
        // console.log("成功了",response.data)
        let res = response.data;
        if(res.status === 0){
            // 用户名和密码OK
            message.success("登录成功");

            // console.log(res.data)
            // res.data 保存着用户信息（存储在redux(内存)/本地（一直存在）） 
            // 内存（redux/变量） / 本地  都存储
            memorySave.user = res.data; // 保存用户信息到内存中
            localstorageSave.saveUser(res.data); // 保存用户信息到本地

            // 跳到后台首页面
            this.props.history.replace("/")
        }else{
            // 登录失败
            message.error(res.msg);
        }
    };

    render() {
        // 判断是否已登录  如果登录了 自动跳转到后台首页面
        let user = memorySave.user;
        if(user && user._id){
            return <Redirect to="/"></Redirect>
        }
        return (
            <div className="login">
                <header>
                    <h1>商品管理系统</h1>
                </header>
                <section>
                    <h1>用户登录</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                                {
                                    max:14,
                                    message:"用户名最长位数为14位"
                                },
                                {
                                    min:5,
                                    message:"用户名最短位数为5位"
                                },
                                {
                                    pattern:/^[a-zA-Z0-9_]+$/,
                                    message:"用户名必须是英文，数字或下划线组成"
                                }
                            ]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                                {
                                    max:14,
                                    message:"密码必须小于14位"
                                },
                                {
                                    min:4,
                                    message:"密码必须大于4位"
                                },
                                {
                                    pattern:/^[a-zA-Z0-9]+$/,
                                    message:"用户名必须是英文，数字或下划线组成"
                                }
                            ]}
                        >
                            <Input
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

















