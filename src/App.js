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
    this.setState({
      todolist: newToDo
    });
    localStorage.setItem("todolist", JSON.stringify(newToDo));
  };

  toggleStatus = id => {
    this.setState(
      {
        todolist: this.state.todolist.map(obj => {
          if (Number(obj.id) === Number(id)) {
            return {
              ...obj,
              status: !obj.status
            };
          } else {
            return obj;
          }
        })
      },
      this.componentDidUpdate
    );
  };

  deleteTodo = id => {
    this.setState(
      {
        todolist: this.state.todolist.filter(obj => {
          if (Number(obj.id) !== Number(id)) {
            return obj;
          }
        })
      },
      this.componentDidUpdate
    );
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

  componentDidUpdate = () => {
    localStorage.setItem("todolist", JSON.stringify(this.state.todolist));
  };

  render() {
    console.log(this.state.todolist);
    return (
      <div className="container d-flex justify-content-center p-5">
        <div className="col-lg-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Awesome Todo list</h4>
              <ToDo onSubmit={this.addTodo} />
              <hr />
              <ToDoList
                data={this.state.todolist}
                toggle={this.toggleStatus}
                delete={this.deleteTodo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
