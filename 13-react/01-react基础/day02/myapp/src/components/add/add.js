import React, { Component } from "react"
import uuid from "uuid"
import "./add.css"

export default class Add extends Component {
    add =()=>{
        // 接收App传递过的方法
        let { addComment } = this.props

        // 得到用户输入的内容
        let name = this.refs.name.value;
        let content = this.content.value;

        // 检验数据
        if( !name.trim() || !content.trim()){
            alert("名字和评论内容不能为空")
            return
        }
        // 调用App组件传递的方法
        addComment({id:uuid(),name,content})

        // 清空输入框 
        this.refs.name.value = "";
        this.content.value = "";
    }
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" ref="name" placeholder="用户名" />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" ref={ (content)=>{this.content=content} } placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}




















