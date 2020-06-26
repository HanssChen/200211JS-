import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { formatDate } from "../../utils/dateUtils"
import memorySave from "../../utils/memorySave"
import { reqWeather } from "../../api/index"
import LinkButton from '../link-button'
import menuList from "../../config/menuConfig"

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
  render() {
    let {currentTime,dayPictureUrl,weather} = this.state;
    const username = memorySave.user.username;
    let title = this.getTitle(); 
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎, {username}</span>
          <LinkButton>退出</LinkButton>
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













