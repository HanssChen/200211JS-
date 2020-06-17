// React代码中没有写到  但是必须导入  jsx  React.createElemnt()
import React,{Component} from "react"
import "./item.css"

export default class Item extends Component{
    // 在react中调用一个方法，需要传参时，写法有点特别  onClick={ ()=>{this.delete(id)} }
    // 如果不传值  写法：onClick={ this.delete }
    delete = (id)=>{
        let { deleteComment } = this.props
        if(window.confirm("你确定要删除吗？")){
            deleteComment(id)
        }
    }
    render(){
        let { id,name,content } = this.props;
        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={ ()=>{this.delete(id)} }>删除</a>
                </div>
                <p className="user"><span >{name}</span><span>说:</span></p>
                <p className="centence">{content}</p>
            </li>
        )
    }
}




















