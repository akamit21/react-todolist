import React from "react";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      todo: "",
      status: false
    };
  }

  onChange = e => {
    this.setState({
      id: this.generateId(),
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let data = {
      id: this.state.id,
      todo: this.state.todo,
      status: this.state.status
    };
    this.props.onSubmit(data);
  };

  generateId = () => {
    let todolist = localStorage.getItem("todolist");
    if (todolist == null) {
      return 1;
    } else {
      todolist = JSON.parse(todolist);
      return Number(todolist[0].id) + 1;
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="d-flex">
            <input
              type="text"
              name="todo"
              className="form-control"
              placeholder="What do you need to do today?"
              value={this.state.value}
              onChange={e => this.onChange(e)}
            />
            <button type="submit" className="add btn btn-outline-dark">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ToDo;
