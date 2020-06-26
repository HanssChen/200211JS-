import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { formatDate } from "../../utils/dateUtils"
import memorySave from "../../utils/memorySave"
import localstorageSave from "../../utils/localstorageSave"
import { reqWeather } from "../../api/index"
import LinkButton from '../link-button'
import menuList from "../../config/menuConfig"
import { Modal } from 'antd';
import "./index.less"

 class Header extends Component {
  state = {
    currentTime:formatDate(Date.now()), // 当前的时间字符串
    dayPictureUrl:"", // 天气图片
    weather:"", // 天气文本
  }
  getTime = ()=>{
    setInterval(()=>{
      const currentTime = formatDate(Date.now())
      this.setState({currentTime})  // 状态变了 重新render
    },1000);
  }
  getWeather = async ()=>{
    const {dayPictureUrl,weather} = await reqWeather("郑州");
    this.setState({dayPictureUrl,weather})
  }
  getTitle = ()=>{
    let path = this.props.location.pathname; // 得到路径
    let title = "";
    menuList.forEach(item=>{
      if(item.key === path){
        title = item.title;
      }else if(item.children){
        let cItem = item.children.find(cItem=>cItem.key === path);
        if(cItem){
          title = cItem.title;
        }
      }
    })
    return title;
  }
  componentDidMount(){ // 发送ajax/启动定时器
    this.getTime();
    this.getWeather();
  }
  logout = ()=>{
    Modal.confirm({
      content: '你确定要退出吗？',
      onOk:()=>{
        // alert("确定")
        // 删除内存和本地的user信息
        memorySave.user = {};
        localstorageSave.removeUser();
        
        // 跳到登录页面
        this.props.history.replace("/login")
      },
      onCancel(){
        // alert("取消")
      }
    });
  }
  render() {
    let {currentTime,dayPictureUrl,weather} = this.state;
    const username = memorySave.user.username;
    let title = this.getTitle(); 

    
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎, {username}</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className="header-bottom">
        <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src={dayPictureUrl} alt="weather" />
            <span>{weather}</span>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Header)













