import React, { useState } from "react";
import "./TodoList.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const TodoList = () => {
  const { name, lName } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); // useHistory now changed to useNavigate 
  const [inputList, setInputList] = useState("");
  // for single list
  //   const [list, setList] = useState();

  // for multiple list
  const [list, setList] = useState([]);
  const [index, setIndex] = useState();

  const itemList = (event) => {
    setInputList(event.target.value);
  };

  //   const listOfItem = (event) => {
  //     console.log(list);
  //     event.preventDefault();
  //     setList(inputList);
  //   };

  //   const onSubmit = (event) => {
  //     event.preventDefault();
  //     setList(inputList);
  //   };

  const onSubmit = (event) => {
    event.preventDefault();
    setList((oldData) => {
      return [...oldData, inputList];
    });
    setInputList("");
    // console.log("list added");
  };

  const deleteData = (event, id) => {
    event.preventDefault();
    console.log("list deleted");
    9;
    setList((oldData) => {
      return oldData.filter((arrElem, i) => {
        return i !== id;
      });
    });
  };

  return (
    <>
      <section className="todo_Sec1">
        <div className="my-container">
          <div className="todo_container">
            <h1 className="heading">
              Create your To Do List {name} {lName}
            </h1>
            {/* <p>My Current location is {location.pathname}</p> */}
            <p>My Current location is {window.location.pathname}</p>
            {location.pathname === "/todo-list/habib/khan" ? (
              <Button
                variant="contained"
                color="primary"
                className="mt-3"
                onClick={() => {
                  alert(`Welcome ${name.toUpperCase()} ${lName.toUpperCase()}`);
                }}
              >
                Click Me
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className="mt-3"
                onClick={() => {
                  navigate(-1);
                  // navigate.push("/");
                }}
              >Go Back</Button>
            )}
            {/* <h1 className="heading">To Do List</h1> */}
            <form
            // onSubmit={onSubmit}
            >
              <div className="input_wrapper">
                <input
                  type="text"
                  placeholder="Addd a Items"
                  onChange={itemList}
                  value={inputList} // it will store and refresh the input field after clicking on button
                  className="input_field"
                />
                <button
                  type="Submit"
                  onClick={onSubmit}
                  className="input_btn"
                ></button>
              </div>
              <ol className="list_container">
                {list.map((data, i) => {
                  return (
                    <>
                      <div key={i} id={i} className="list_wrapper">
                        <li> {data}</li>
                        <button
                          type="Submit"
                          onClick={deleteData}
                          className="delete_btn"
                        ></button>
                      </div>
                    </>
                  );
                })}
              </ol>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
