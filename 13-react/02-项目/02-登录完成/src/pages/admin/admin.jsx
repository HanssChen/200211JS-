import React,{Component} from "react"
import { Redirect } from "react-router-dom"
import memorySave from "../../utils/memorySave"

export default class Admin extends Component{
    render(){   // render是渲染一个jsx
        let user = memorySave.user;
        // 判断有没有登录（判断内存中有没有user）
        if(!user || !user._id){
            // 内存中没有用户信息（没有登录）
            // this.props.history.replace("/login")
            return <Redirect to="/login"></Redirect>
        }
        return(
            <div>
                <h1>Welcome {user.username}</h1>
            </div>
        )
    }
}
