import React,{Component} from 'react';
import { createIncrementAction,createDecrementAction } from "./redux/action_creators"

class App extends Component{
  componentDidMount(){
    // console.log(this.props.store)
  }
  increment = ()=>{   // 加
    let value = this.refs.selectNumer.value;  // value是字符串
    this.props.store.dispatch(createIncrementAction(value*1))
  }
  decrement = ()=>{   // 减
    let value = this.refs.selectNumer.value;  // value是字符串
    this.props.store.dispatch(createDecrementAction(value*1))
  }
  incrementAsync = ()=>{ // 异步加
    let value = this.refs.selectNumer.value;  // value是字符串
    setTimeout(()=>{
        // 这样写有没有问题
        this.props.store.dispatch(createIncrementAction(value*1))
    },2000)
  }
  decrementAsync = ()=>{ // 异步加
    let value = this.refs.selectNumer.value;  // value是字符串
    setTimeout(()=>{
        // 这样写有没有问题
        this.props.store.dispatch(createDecrementAction(value*1))
    },2000)
  }
  render(){
    let count = this.props.store.getState();
    return(
      <div>
        <h3>App组件 当前计数是{count}</h3>
        <select ref="selectNumer">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.increment}>同步 加</button>
        <button onClick={this.decrement}>同步 减</button>
        <button onClick={this.incrementAsync}>异步 加</button>
        <button onClick={this.decrementAsync}>异步 减</button>
      </div>
    )
  }
}

export default App;
