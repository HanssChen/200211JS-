import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../actions/counter"

import Show from "../components/Show"
import Add from "../components/Add"
import Sub from "../components/Sub"

class Counter extends Component {
    render() {
        return (
            <div>
                <Show counter={this.props.counter}></Show>
                <p>
                    <Add increment={this.props.increment}></Add> &nbsp;
                    <Sub decrement={this.props.decrement}></Sub>
                </p>
            </div>
        )
    }
}

// state 只有这个组件得到store，才能拿到state
function mapStateToProps(state){  // 把state映射到组件的props
    return{
        counter:state.counter
    }
}
// dispatch 只有这个组件得到store，才能拿到dispatch
function mapDispatchToProps(dispatch){ 
    return bindActionCreators(actions,dispatch)
}

// 这么写，Counter组件就变成了智能组件
// 仓库中的状态和方法作为组件的props来使用的
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
