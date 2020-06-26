import React, { Component } from "react"
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.css"

export default class Login extends Component {
    onFinish = values => {
        // console.log('Received values of form: ', values);

        // 发请求ajax请求    
    };
    render() {
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
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
        </Button>
        Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

















