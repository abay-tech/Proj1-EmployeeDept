import classes from "./Add.module.css";
import { useRef } from "react";

function Add(props) {
  const nameRef = useRef();
  const departmentRef = useRef();
  const dateOfJoiningRef = useRef();

  function addDataHAndler() {
    if (props.parent === "Department") {
      addDepartment();
    } else if (props.parent === "Employee") {
      addEmployee();
    }
  }

  function addEmployee() {
    //cannot use useeffect inside a function
    const data = {
      empName: nameRef.current.value,
      department: departmentRef.current.value,
      dateOfJoining: dateOfJoiningRef.current.value,
      photoFileName: "file1.jpg",
    };
    fetch("" + process.env.REACT_APP_API + "Employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      props.closePopUp();
      return response.json;
    });
  }

  function addDepartment() {
    const data = {
      deptName: nameRef.current.value,
    };
    fetch("" + process.env.REACT_APP_API + "Department", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      props.closePopUp();
      return response.json;
    });
  }

  return (
    <div>
      {props.isActive && (
        <div className={classes.popUpBackGround}>
          <div className={classes.popUp}>
            <h3>Add {props.parent}?</h3>

            <div className={classes.dataArea}>
              <label>{props.parent} Name</label>
              <input className={classes.inputBox} ref={nameRef}></input>
            </div>

            {props.parent === "Employee" ? (
              <div>
                <div className={classes.dataArea}>
                  <label>{props.parent} Department</label>
                  <input
                    className={classes.inputBox}
                    ref={departmentRef}
                  ></input>
                </div>

                <div className={classes.dataArea}>
                  <label>{props.parent} Joining Date</label>
                  <input
                    className={classes.inputBox}
                    ref={dateOfJoiningRef}
                  ></input>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div className={classes.buttonSet}>
              <button onClick={props.closePopUp}>Close</button>
              <button onClick={addDataHAndler}>Add</button>
            </div>
          </div>
        </div>
      )}
      {!props.isActive && <div></div>}
    </div>
  );
}
export default Add;
