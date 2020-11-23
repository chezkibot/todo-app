import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={this.onChange}
          placeholder="Add Todo..."
          value={this.state.title}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputTodo;
