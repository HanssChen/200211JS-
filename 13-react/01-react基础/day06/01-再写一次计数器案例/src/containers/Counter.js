import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment,decrement } from "../actions/counter"

import Show from "../components/Show"
import Add from "../components/Add"
import Sub from "../components/Sub"

class Counter extends Component {
    render() {
        return (
            <div>
                <Show counter={ this.props.counter }></Show>
                <p>
                    <Add increment={ this.props.increment }></Add> &nbsp;
                    <Sub decrement={ this.props.decrement }></Sub>
                </p>
            </div>
        )
    }
}

// state 就是仓库中的状态
// function mapStateToProps(state){   // 将state转换为展示组件的props
//     return{    // {}表示映射关系  props.counter
//         counter:state.counter
//     }
// }
// let mapStateToProps = state=>({counter:state.counter})

// -------------------
// function mapDispatchToProps(dispath){  // 将分发action的函数转换为展示组件的props
// }

export default connect(state=>({counter:state.counter}),{ increment,decrement })(Counter)
