import React,{Component} from "react"
import { Form, Input, Select } from 'antd';

const { Option } = Select;

export default class AddForm extends Component{
    render(){
        return(
            <Form>
                <Form.Item>
                    <Select defaultValue="0">
                        <Option key="0" value="0">一级分类</Option>
                        <Option value="1">家电</Option>
                        <Option value="2">数码</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="请输入分类名称"></Input>
                </Form.Item>
            </Form>
        )
    }
}















