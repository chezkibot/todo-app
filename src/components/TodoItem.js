import React from "react";

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "black",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    const { completed, id, title } = this.props.todo;

    return (
      <div className="todo-items">
        <li className="todo-item">
          <input
            type="checkbox"
            onChange={() => this.props.handleChangeProps(id)}
            checked={completed}
            className="checkbox"
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {this.props.todo.title}
          </span>
        </li>
      </div>
    );
  }
}

export default TodoItem;
