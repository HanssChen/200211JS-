import React, { Component } from "react"
import { Card, Icon, Form, Input, Button, Cascader, message } from "antd"
import { reqCategorys } from "../../api/index"

import LinkButton from "../../components/link-button"

const Item = Form.Item;
const TextArea = Input.TextArea;


class ProductAddUpdate extends Component {
    state = {
        options:[]
    }
    // 校验输入的商品价格
    validatorPrice = (rule, value, callback) => {
        if (value * 1 > 0) {
            callback()
        } else {
            callback("价格必须大于0")
        }
    }
    // 级联组件选中
    onChange = (value, selectedOptions) => {
        console.log(value, selectedOptions);
    };
    // 级联组件
    loadData = async selectedOptions => {
        const targetOption = selectedOptions[0];
        targetOption.loading = true;  // 开启loading效果
        // targetOption.value; // 得到一级分类的_id
        const subCategorys = await this.getCategorys(targetOption.value)
        targetOption.loading = false;  // 开启loading效果
        // console.log(subCategorys)  
        if(subCategorys && subCategorys.length>0){
            // 当前的一级分类有二级分类
            let childOptions = subCategorys.map(c=>({
                value:c._id,
                label:c.name,
                isLeaf:true
            }))
            targetOption.children=childOptions;
            // console.log(childOptions)
        }else{
            // 当前的一级分类没有二级分类
            targetOption.isLeaf = true;
        }

        this.setState({
            options: [...this.state.options],
        });
    };
    // 初始化Options
    initOptions = (categorys)=>{
        const options = categorys.map(c=>({
            value:c._id,
            label:c.name,
            isLeaf:false
        }))
        // 更新options状态
        this.setState({
            options
        })
    }
    // 获取一级或二级分类列表
    getCategorys = async (parentId)=>{
        // parentId是0  表示获取一级分类
        const result = await reqCategorys(parentId);
        if(result.data.status === 0){
           const categorys = result.data.data; // 可能是一级分类数据也可能是二级分类数据
           if(parentId === '0'){
              this.initOptions(categorys);
           }else{
               // 二级分类
               return categorys;
           }
           
        }
    }
    componentDidMount(){
        this.getCategorys("0")
    }
    render() {
        const title = (
            <span>
                <LinkButton onClick={() => this.props.history.goBack()}>
                    <Icon type="arrow-left"></Icon>
                </LinkButton>
                <span>添加商品</span>
            </span>
        )
        const formItemLayout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 8 }
        }
        const { getFieldDecorator } = this.props.form
        return (
            <Card title={title}>
                <Form {...formItemLayout}>
                    <Item label="商品名称">
                        {
                            getFieldDecorator('name', {
                                rules: [
                                    { required: true, message: "必须输入商品名称" }
                                ]
                            })(<Input placeholder="请输入商品名称"></Input>)
                        }
                    </Item>
                    <Item label="商品描述">
                        {
                            getFieldDecorator('desc', {
                                rules: [
                                    { required: true, message: "必须输入商品描述" }
                                ]
                            })(<TextArea placeholder="请输入商品描述" autoSize={{ minRows: 2, maxRows: 6 }}></TextArea>)
                        }
                    </Item>
                    <Item label="商品价格">
                        {
                            getFieldDecorator('price', {
                                rules: [
                                    { required: true, message: "必须输入商品价格" },
                                    { validator: this.validatorPrice }
                                ]
                            })(<Input type="number" placeholder="请输入商品价格" addonAfter="元"></Input>)
                        }
                    </Item>
                    <Item label="商品分类">
                        {
                            getFieldDecorator('xxx', {
                                rules: [
                                    { required: true, message: "必须输入商品分类" }
                                ]
                            })(<Cascader
                                options={this.state.options}
                                loadData={this.loadData}
                                onChange={this.onChange}
                                changeOnSelect
                            />)
                        }
                    </Item>
                    <Item label="商品图片">
                        <div>商品图片</div>
                    </Item>
                    <Item label="商品详情">
                        <div>商品详情</div>
                    </Item>
                    <Item>
                        <Button type="primary">提交</Button>
                    </Item>
                </Form>
            </Card>
        )
    }
}

export default Form.create()(ProductAddUpdate);