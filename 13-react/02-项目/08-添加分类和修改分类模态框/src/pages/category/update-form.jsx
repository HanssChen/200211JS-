import React,{Component} from "react"
import { Form, Input, Select } from 'antd';

export default class UpdateForm extends Component{
    render(){
        return(
            <Form>
                <Form.Item>
                    <Input placeholder="请输入分类名称"></Input>
                </Form.Item>
            </Form>
        )
    }
}













