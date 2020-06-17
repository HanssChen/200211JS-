import React from 'react';
import PropTypes from "prop-types"

export default class Footer extends React.Component {
	static propTypes = {
		leftTodos:PropTypes.number.isRequired,
		setVisibility:PropTypes.func.isRequired,
		visibility:PropTypes.string.isRequired,
		finishedTodos:PropTypes.number.isRequired,
		clearCompleted:PropTypes.func.isRequired,
	}
    render() {
        return (
            <footer className="footer">
				<span className="todo-count"><strong>{this.props.leftTodos}</strong> items left</span> 
				<ul className="filters">
					<li><a href="javascript:;" onClick={ ()=>this.props.setVisibility("all")} className={this.props.visibility == "all" ? "selected" : ""}>all</a></li>
					<li><a href="javascript:;" onClick={ ()=>this.props.setVisibility("active")}  className={this.props.visibility == "active" ? "selected" : ""}>active</a></li>
					<li><a href="javascript:;" onClick={ ()=>this.props.setVisibility("completed")}  className={this.props.visibility == "completed" ? "selected" : ""}>completed</a></li>
				</ul> 
				{this.props.finishedTodos > 0 ? <button onClick={()=>this.props.clearCompleted()} className="clear-completed">clear completed</button> : null}
			</footer>
        );
    }
}


