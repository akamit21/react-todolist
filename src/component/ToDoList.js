import React from "react";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="flex-column-reverse list-unstyled">
          {this.props.data.map(obj => (
            <li className="d-flex" key={obj.id}>
              <div className="col-9 custom-control custom-checkbox h5">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={obj.id}
                />
                <label htmlFor={obj.id} className="custom-control-label">
                  {obj.todo}
                </label>
              </div>
              <div className="col-3">
                <button className="float-right btn btn-outline-danger btn-sm ">
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
