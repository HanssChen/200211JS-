import React,{ Component } from "react"; 

// 在详情组件中获取传递的id参数，有了id参数，就可以发送ajax请求，根据不同的参数获取不同的详情
export default class Detail extends Component{
    // 在实际开始中，通常是在componentWillMount勾子中获取id,然后发起ajax请求，获取数据
    componentDidMount(){
        // let id = this.props.match.params.id;
        // let url = `http://xxx.xx.com/api/${id}`
        // axios.get(url).then().catch()
    }
    render(){
        return(
            <div>
                <h3>新闻详情页面</h3>
                <p>这是第{this.props.match.params.id}条新闻正文...</p>

                <button onClick={ ()=>this.props.history.go(-1) }>返回</button>
            </div>
        )
    }
}