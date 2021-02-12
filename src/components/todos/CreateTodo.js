import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} />
          </p>
          <input type="submit" value="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
