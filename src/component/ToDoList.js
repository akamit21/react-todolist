import React from "react";

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <ul className="flex-column-reverse list-unstyled">
          {this.props.data.map(obj => (
            <li className="d-flex py-1" key={obj.id}>
              <div className="col-9 custom-control custom-checkbox h5">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={obj.id}
                  onClick={e => this.props.toggle(e.target.id)}
                  defaultChecked={obj.status ? true : false}
                />
                <label htmlFor={obj.id} className="custom-control-label">
                  {obj.todo}
                </label>
              </div>
              <div className="col-3 pr-0">
                <button
                  className="float-right btn btn-outline-danger btn-sm"
                  id={obj.id}
                  onClick={e => this.props.delete(e.target.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
