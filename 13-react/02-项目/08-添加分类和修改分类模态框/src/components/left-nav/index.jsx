import React, { Component } from "react"
import { Link,withRouter } from "react-router-dom"
import "./index.less"
import { Menu, Icon } from 'antd'
import menuList from "../../config/menuConfig"
import { PieChartOutlined, MailOutlined, } from '@ant-design/icons';

const { SubMenu } = Menu;


class LeftNav extends Component {
    getMenuNodes = (menuList) => {
       return menuList.map(item => {
            // {
            //     title: '首页', // 菜单标题名称
            //     key: '/home', // 对应的path
            //     icon: 'home', // 图标名称
            //     isPublic: true, // 公开的
            // },
            // <Menu.Item key="1" icon={<PieChartOutlined />}>
            //     <Link to="/home">
            //         首页
            //     </Link>
            // </Menu.Item>
            if (!item.children) {
                // 没有childen
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon}></Icon>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                // 有childen
                return (
                    <SubMenu key={item.key} title={
                        <span><Icon type={item.icon}></Icon><span>{item.title}</span></span>
                    }>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }
    componentDidCatch(){
        this.menuList = this.getMenuNodes(menuList)
    }
    render() {
        // 得到请求的pathname
        let path = this.props.location.pathname;
        console.log(path)
        return (
            <div className="left-nav">
                <Link to="/">
                    <header className="left-nav=header">
                        <h1>XXX管理后台</h1>
                    </header>
                </Link>
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to="/home">
                            首页
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<MailOutlined />} title="商品">
                        <Menu.Item key="2" icon={<PieChartOutlined />}><Link to="/category">品牌管理</Link></Menu.Item>
                        <Menu.Item key="3" icon={<PieChartOutlined />}><Link to="/product">商品管理</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4" icon={<PieChartOutlined />}><Link to="/user">用户管理</Link></Menu.Item>
                    <Menu.Item key="5" icon={<PieChartOutlined />}><Link to="/role">角色管理</Link></Menu.Item>
                    <SubMenu key="sub3" icon={<MailOutlined />} title="图表管理">
                        <Menu.Item key="6" icon={<PieChartOutlined />}><Link to="/bar">柱型图</Link></Menu.Item>
                        <Menu.Item key="7" icon={<PieChartOutlined />}><Link to="/line">折线图</Link></Menu.Item>
                        <Menu.Item key="8" icon={<PieChartOutlined />}><Link to="/pie">饼图</Link></Menu.Item>
                    </SubMenu> */}

                    {this.getMenuNodes(menuList)}
                </Menu>
            </div>
        )
    }
}
export default withRouter(LeftNav)













