import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment,decrement,incrementAsync,incrementIfOdd } from "../actions/counter"

import Show from "../components/Show"
import Add from "../components/Add"
import AsyncAdd from "../components/AsyncAdd"
import OddAdd from "../components/OddAdd"
import Sub from "../components/Sub"

class Counter extends Component {
    render() {
        return (
            <div>
                <Show counter={ this.props.counter }></Show>
                <p>
                    <Add increment={ this.props.increment }></Add> &nbsp;
                    <Sub decrement={ this.props.decrement }></Sub> &nbsp;
                    <AsyncAdd incrementAsync={ this.props.incrementAsync }></AsyncAdd> &nbsp;
                    <OddAdd incrementIfOdd={ this.props.incrementIfOdd }></OddAdd>
                </p>
            </div>
        )
    }
}

export default connect(state=>({counter:state.counter}),{ increment,decrement,incrementAsync,incrementIfOdd })(Counter)
