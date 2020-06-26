import React, { Component } from "react"
import { Card,Table,Button,Icon,message,Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import LinkButton from '../../components/link-button'
import {reqCategorys, reqUpdateCategory, reqAddCategory} from '../../api'
import CategoryForm from './category-form'

export default class Category extends Component {
    state = {
        columns:[], // 表头数据
        categorys:[], // 一级分类数据
        loading:false, // 获取分类数据时的loading
    }
    // 初始化表头
    initColumns = ()=>{
        const columns = [
            {
                title: '分类的名称',
                dataIndex: 'name',
            },
            {
                title: '操作',
                width:300,
                render:()=>(
                    <span>
                        <LinkButton>修改分类</LinkButton>
                        <LinkButton>查看子分类</LinkButton>
                    </span>
                )
            }
        ];
        this.setState({columns})
    }
    // ajax获取一级列表数据
    getCategorys = async ()=>{
        // 在发送ajax之前，显示loading 
        this.setState({loading:true})
        const result = await reqCategorys("0");
        this.setState({loading:false})
        console.log(result)
        if(result.data.status === 0){
            const categorys = result.data.data
            this.setState({categorys})
            message.success("获取分类列表成功~")
        }else{
            message.error("获取分类列表失败~")
        }
    }
    componentWillMount(){
        this.initColumns();
    }
    componentDidMount(){  // ajax
        this.getCategorys();
    }
    render() {
        const extra = (
            <Button type='primary' onClick={this.showAdd}>
                <PlusOutlined />添加
            </Button>
        )
        let title = "一级分类列表"
        return (
            <Card title={title} extra={extra}>
                <Table 
                    bordered 
                    loading={this.state.loading}
                    dataSource={this.state.categorys} 
                    columns={this.state.columns} 
                    pagination={{defaultPageSize:5,showQuickJumper:true}}
                />
            </Card>
        )
    }
}
