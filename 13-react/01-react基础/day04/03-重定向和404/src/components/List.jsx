import React,{ Component } from "react"; 
import { Route, Link } from "react-router-dom"

export default class List extends Component{
    render(){
        return(
            <div>
                <h3>列表页组件</h3>
                <ul>
                    <li><Link to="/detail/1">第1条新闻</Link></li>
                    <li><Link to="/detail/2">第2条新闻</Link></li>
                    <li><Link to="/detail/3">第3条新闻</Link></li>
                    <li><Link to="/detail/4">第4条新闻</Link></li>
                    <li><Link to="/detail/5">第5条新闻</Link></li>
                    <p>....</p>
                    <button onClick={()=>this.props.history.push("/detail/100")}>第100条新闻</button>
                </ul>
            </div>
        )
    }
}