import React from 'react';
import Todo from "./Todo"
import PropTypes from "prop-types"

export default class TodoList extends React.Component {
	static propTypes = {
		todos:PropTypes.array.isRequired,
		deleteTodo:PropTypes.func.isRequired,
		toggleTodo:PropTypes.func.isRequired,
		toglleAll:PropTypes.func.isRequired,
		allChecked:PropTypes.bool.isRequired,
	}
    render() {
        return (
            <section className="main">
				<input type="checkbox" className="toggle-all" 
				    checked={this.props.allChecked}
					onChange = { e=>this.props.toglleAll(e.target.checked) }
				/> 
				<ul className="todo-list">
					{
						this.props.todos.map((todo,index)=><Todo 
							todo={todo} 
							key={index} 
							deleteTodo={this.props.deleteTodo}
							toggleTodo = {this.props.toggleTodo}
						/>)
					}
				</ul>
			</section> 
        );
    }
}


