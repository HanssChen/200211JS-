import React from 'react';
import Add from "./components/add/add"
import List from "./components/list/list"

class App extends React.Component{
  state = {
    comments:[
      {id:"001",name:"旺财",content:"我觉得还行"},
      {id:"002",name:"小强",content:"太难了"},
      {id:"003",name:"赵六",content:"有vue基础，学着可以"},
    ]
  }
  // 添加一条评论
  addComment = (commentObj)=>{
    // let { comments } = this.state;  // 获取原有状态

    let comments = [...this.state.comments]  // 普遍人写的标准写法
    comments.unshift(commentObj); // 追加一条评论
    this.setState({comments}); // 更新状态
  }
  // 删除一条评论
  deleteComment = (id)=>{
    let comments = [...this.state.comments]
    comments = comments.filter((item)=>{
      return item.id !== id  // 只有是true才返回  返回一个新数组  
    })
    this.setState({comments}); // 更新状态
  }
  render(){
    let { comments } = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
           <Add addComment={this.addComment}></Add>
           <List comments={comments} deleteComment={this.deleteComment}></List>
        </div>
      </div>
    );
  }
}

export default App;
