import React from 'react';
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

import "../styles/todo-mvc.css"

class App extends React.Component{
  state = {
    todos:[
      {content:"学习vue",complete:true},
      {content:"学习react",complete:false},
      {content:"学习jq",complete:true},
      {content:"打游戏",complete:false},
    ],
    visibility:"all"
  }
  // 添加todo任务
  addTodo(todo){  // 没有使用箭头函数  你记死了  一个普通方法中的this不是组件对象
    this.state.todos.push(todo);
    this.setState({
      todos:this.state.todos
    })
  }
  // 删除todo任务
  deleteTodo(todo){
    let index = this.state.todos.findIndex(t=>t == todo); // 找到todo返回索引  没有找到返回-1
    this.state.todos.splice(index,1);
    this.setState({
      todos:this.state.todos
    })
  }
  // 切换todo状态
  toggleTodo(todo){
    let index = this.state.todos.findIndex(t=>t == todo);
    this.state.todos[index].complete = !this.state.todos[index].complete
    this.setState({
      todos:this.state.todos
    })
  }
  // 批量切换todo状态
  toglleAll(done){
    this.state.todos.forEach(todo=>todo.complete = done)
    this.setState({
      todos:this.state.todos
    })
  }
  // 根据所有的todo状态决定全选按钮的状态
  allChecked(){
    return this.state.todos.every(todo=>todo.complete)
  }
  // 统计没有完成的任务的个数
  leftTodos(){
    return this.state.todos.filter(todo=>!todo.complete).length
  }
  // 由visibility和todos共同决定最终要显示的todos
  filteredTodos(){   // 类似于vue中的计算属性   根据已有数据得到的新的数据
    switch(this.state.visibility){
      case "all":
        return this.state.todos;
      case "active":
        return this.state.todos.filter(todo=>!todo.complete);
      case "completed":
        return this.state.todos.filter(todo=>todo.complete);
      default:
        break
    }
  }
  // 改变visibility状态
  setVisibility(filter){
    this.setState({
      visibility:filter
    })
  }
  // 统计已完成的todos数量
  finishedTodos(){
    return this.state.todos.filter(todo=>todo.complete).length;
  }
  // 清除已完成的todos
  clearCompleted(){
    let arr = this.state.todos.filter(todo=>!todo.complete);  // arr表示没有完成的
    this.setState({  // 把没有完成的赋值给todos， 相当于删除掉已完成的
      todos:arr
    })
  }
  render(){
    return (
      <section className="todoapp">
        <AddTodo addTodo={this.addTodo.bind(this)} />
        <TodoList  
          todos = {this.filteredTodos()} 
          deleteTodo = {this.deleteTodo.bind(this)}  
          toggleTodo = {this.toggleTodo.bind(this)}
          toglleAll = {this.toglleAll.bind(this)}
          allChecked = {this.allChecked()}
        />
        <Footer 
          leftTodos = {this.leftTodos()} 
          setVisibility = {this.setVisibility.bind(this)}
          visibility = {this.state.visibility}
          finishedTodos = {this.finishedTodos()}
          clearCompleted = {this.clearCompleted.bind(this)} 
        />
      </section>
    );
  }
}

export default App;
