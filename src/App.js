import React from "react";
import ToDo from "./component/ToDo";
import ToDoList from "./component/ToDoList";
import "./App.css";

class App extends React.Component {
  state = {
    todolist: []
  };

  addTodo = todo => {
    const newToDo = [todo, ...this.state.todolist];
    localStorage.setItem("todolist", JSON.stringify(newToDo));
    this.setState({
      todolist: newToDo
    });
  };

  componentDidMount = () => {
    let list = localStorage.getItem("todolist");
    if (list == null) {
      list = [];
    } else {
      list = JSON.parse(list);
    }
    this.setState({
      todolist: list
    });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center p-5">
        <div className="col-lg-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Awesome Todo list</h4>
              <ToDo onSubmit={this.addTodo} />
              <hr />
              <ToDoList data={this.state.todolist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
