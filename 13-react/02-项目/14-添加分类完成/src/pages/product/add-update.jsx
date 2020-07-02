import React, { Component } from "react"
import { Card, Icon, Form, Input, Button, Cascader, message } from "antd"
import { reqCategorys,reqAddOrUpdateProduct } from "../../api/index"

import LinkButton from "../../components/link-button"
import PicturesWall from "./pictures-wall"
import RichTextEditor from "./rich-text-editor"

const Item = Form.Item;
const TextArea = Input.TextArea;


class ProductAddUpdate extends Component {
    state = {
        options: []
    }
    constructor(props){
        super(props)

        // 创建一个ref容器
        this.pw = React.createRef();
        this.editor = React.createRef();
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
        if (subCategorys && subCategorys.length > 0) {
            // 当前的一级分类有二级分类
            let childOptions = subCategorys.map(c => ({
                value: c._id,
                label: c.name,
                isLeaf: true
            }))
            targetOption.children = childOptions;
            // console.log(childOptions)
        } else {
            // 当前的一级分类没有二级分类
            targetOption.isLeaf = true;
        }

        this.setState({
            options: [...this.state.options],
        });
    };
    // 初始化Options
    initOptions = async (categorys) => {
        const options = categorys.map(c => ({
            value: c._id,
            label: c.name,
            isLeaf: false
        }))

        // 如果是一个二级分类商品
        let { isUpdate, product } = this;
        let { pCategoryId, categoryId } = product;
        if (isUpdate && pCategoryId !== "0") {
            const subCategorys = await this.getCategorys(pCategoryId);
            let childOptions = subCategorys.map(c => ({
                value: c._id,
                label: c.name,
                isLeaf: true
            }))
            // 找到当前商品对应的一级optios对象
            const targetOption = options.find(option=>option.value===pCategoryId)
            targetOption.children = childOptions;
        }

        // 更新options状态
        this.setState({
            options
        })
    }
    // 获取一级或二级分类列表
    getCategorys = async (parentId) => {
        // parentId是0  表示获取一级分类
        const result = await reqCategorys(parentId);
        if (result.data.status === 0) {
            const categorys = result.data.data; // 可能是一级分类数据也可能是二级分类数据
            if (parentId === '0') {
                this.initOptions(categorys);
            } else {
                // 二级分类
                return categorys;
            }

        }
    }
    // 增加或修改提交
    submit = () => {
        this.props.form.validateFields(async (error, values) => {
            if (!error) {
                // 验证通过了
                // console.log(values)  
                // let imgs = this.pw.current.getImgs();
                // let detail = this.editor.current.getDetail();
                // console.log(imgs)
                // console.log(detail)

                // ------------------ 准备数据
                const {name,desc,price,categoryIds} = values;
                // console.log(name,desc,price,categoryIds);
                let pCategoryId, categoryId;
                if(categoryIds.length===1){
                    pCategoryId = '0'
                    categoryId = categoryIds[0];
                }else{
                    pCategoryId = categoryIds[0];
                    categoryId = categoryIds[1];
                }
                // console.log(name,desc,price,pCategoryId,categoryId);
                let imgs = this.pw.current.getImgs();
                let detail = this.editor.current.getDetail();

                const product = {name,desc,price,imgs,detail,pCategoryId, categoryId};

                if(this.isUpdate){
                    product._id = this.product._id;
                }

                // 调接口
                const result = await reqAddOrUpdateProduct(product)

                // 提示
                if(result.data.status === 0){
                    message.success(`${this.isUpdate ? '更新' : '添加'}商品成功！`)
                    this.props.history.goBack();
                }else{
                    message.error(`${this.isUpdate ? '更新' : '添加'}商品失败！`)
                }
            }
        });
    }
    componentWillMount() {
        let product;
        if (this.props.location.state) {
            // 修改
            product = this.props.location.state.product
        }
        // // 如果传递了product，isUpdate是true 表示修改商品
        this.isUpdate = !!product; // !!product转成布尔值
        this.product = product || {};

    }
    componentDidMount() {
        this.getCategorys("0")
    }
    render() {
        let { isUpdate, product } = this;
        let { pCategoryId, categoryId, imgs, detail } = product;
        let categoryIds = [];
        if (isUpdate) {
            // 修改
            if (pCategoryId === "0") {
                // 此商品属于一级分类，没有二级分类
                categoryIds.push(categoryId);
            } else {
                // 此商品是一个二级分类下的商品
                categoryIds.push(pCategoryId);
                categoryIds.push(categoryId);
            }
        }
        // console.log(product.name)
        const title = (
            <span>
                <LinkButton onClick={() => this.props.history.goBack()}>
                    <Icon type="arrow-left"></Icon>
                </LinkButton>
                <span>{isUpdate ? "修改商品" : "添加商品"}</span>
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
                                initialValue: product.name,
                                rules: [
                                    { required: true, message: "必须输入商品名称" }
                                ]
                            })(<Input placeholder="请输入商品名称"></Input>)
                        }
                    </Item>
                    <Item label="商品描述">
                        {
                            getFieldDecorator('desc', {
                                initialValue: product.desc,
                                rules: [
                                    { required: true, message: "必须输入商品描述" }
                                ]
                            })(<TextArea placeholder="请输入商品描述"></TextArea>)
                        }
                    </Item>
                    <Item label="商品价格">
                        {
                            getFieldDecorator('price', {
                                initialValue: product.price,
                                rules: [
                                    { required: true, message: "必须输入商品价格" },
                                    { validator: this.validatorPrice }
                                ]
                            })(<Input type="number" placeholder="请输入商品价格" addonAfter="元"></Input>)
                        }
                    </Item>
                    <Item label="商品分类">
                        {
                            getFieldDecorator('categoryIds', {
                                initialValue: categoryIds,
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
                        <PicturesWall ref={this.pw} imgs={imgs}></PicturesWall>
                    </Item>
                    <Item label="商品详情" labelCol={{span:2}} wrapperCol={{span:20}}>
                        <RichTextEditor ref={this.editor} detail={detail} ></RichTextEditor>
                    </Item>
                    <Item>
                        <Button type="primary" onClick={this.submit}>提交</Button>
                    </Item>
                </Form>
            </Card>
        )
    }
}

export default Form.create()(ProductAddUpdate);