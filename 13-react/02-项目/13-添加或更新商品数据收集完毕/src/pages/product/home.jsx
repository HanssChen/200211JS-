import React, { Component } from "react"
import { Card, Input, Select, Button, Icon, Table,message } from "antd"
import LinkButton from "../../components/link-button"
import { reqProducts, reqSearchProducts, reqUpdateStatus } from "../../api/index"
import { PAGE_SIZE } from "../../utils/constants"

const Option = Select.Option;

export default class ProductHome extends Component {
    state = {
        total: 0, // 商品总数量
        products: [], // 商品
        loading: false, // 渲染数据时loading
        searchName: "", // 搜索的关键字
        searchType: "productName", // 根据哪个字段进行搜索
    }
    // 初始化表头数据
    initColumns = () => {
        // 什么时候定义状态   什么时候把数据放到组件实例上？
        // 答：通常是需要变化的数据 定义成状态  setState   不变的挂载到组件实例上
        this.columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
            },
            {
                title: '商品描述',
                dataIndex: 'desc',
            },
            {
                title: '价格',
                dataIndex: 'price',
                render: (price) => "￥" + price
            },
            {
                width: 100,
                title: '状态',
                render: (product) => {
                    return (
                        <span>
                            <Button type="primary" onClick={() => this.updateStatus(product._id, product.status===1 ? 2 : 1)}>{product.status === 1 ? "下架" : "上架"}</Button>
                            <span>{product.status === 1 ? "在售" : "已下架"}</span>
                        </span>
                    )
                }
            },
            {
                width: 100,
                title: '操作',
                render: (product) => {
                    return (
                        <span>
                            <LinkButton onClick={() => this.props.history.push('/product/detail', { product })}>详情</LinkButton>
                            <LinkButton onClick={()=>this.props.history.push("/product/addupdate", { product })}>修改</LinkButton>
                        </span>
                    )
                }
            }
        ];
    }
    // 获取商品数据
    getProducts = async (pageNum) => {
        this.pageNum = pageNum;  // 保存当前页码
        this.setState({ loading: true })
        let { searchName, searchType } = this.state;
        // 判断默认显示商品还是搜索分页显示商品
        let result;
        if (searchName) {
            result = await reqSearchProducts(pageNum, PAGE_SIZE, searchName, searchType)
        } else {
            result = await reqProducts(pageNum, PAGE_SIZE);
        }
        this.setState({ loading: false })
        console.log(result)
        if (result.data.status == 0) {
            const { total, list } = result.data.data;
            this.setState({
                total,
                products: list
            })
        }
    }
    // 更新商品状态
    updateStatus = async (id, status) => {
        console.log(id,status)
        let result = await reqUpdateStatus(id, status)
        if (result.data.status === 0) {
            message.success("更新商品状态成功")
            this.getProducts(this.pageNum)
        }
    }
    componentWillMount() {
        this.initColumns();
    }
    componentDidMount() {
        this.getProducts(1);
    }
    render() {
        let { products, loading, total, searchType, searchName } = this.state;
        const title = (
            <span>
                <Select
                    value={searchType}
                    style={{ width: 150 }}
                    onChange={value => this.setState({ searchType: value })}
                >
                    <Option value="productName">按名称搜索</Option>
                    <Option value="productDesc">按描述搜索</Option>
                </Select>
                <Input
                    placeholder="关键字"
                    style={{ width: 150, margin: "0 20px" }}
                    value={searchName}
                    onChange={event => this.setState({ searchName: event.target.value })}
                />
                <Button type="primary" onClick={() => this.getProducts(1)}>搜索</Button>
            </span>
        )
        const extra = (
            <Button type="primary" onClick={()=>this.props.history.push("/product/addupdate")}>
                <Icon type="plus"></Icon>
                添加商品
            </Button>
        )
        return (
            <Card title={title} extra={extra}>
                <Table
                    dataSource={products}
                    rowKey="_id"
                    columns={this.columns}
                    bordered
                    loading={loading}
                    pagination={{
                        total,
                        defaultPageSize: PAGE_SIZE,
                        showQuickJumper: true,
                        onChange: this.getProducts
                    }}
                />;
            </Card>
        )
    }
}