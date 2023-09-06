import classes from "./Item.module.css";
import { useState } from "react";
import Delete from "./Delete";
import Add from "./Add";

function EmployeeItem(props) {
  const [deleteActive, setDeleteActive] = new useState(false);
  const [addActive, setAddActive] = new useState(false);


  function deleteEmployeeToggler() {
    if (deleteActive) {
      setDeleteActive(false);
    } else {
      setDeleteActive(true);
    }
  }

  function addEmployeeToggler() {
    if (addActive) {
      setAddActive(false);
    } else {
      setAddActive(true);
    }
  }

  return (
    <div>
      <Add isActive={addActive} parent={"Employee"} closePopUp={addEmployeeToggler}></Add>

      <h1 className={classes.title}> EMPLOYEES</h1>
      <div className={classes.buttonDiv}>
        <button onClick={addEmployeeToggler}>ADD EMPLOYEE</button>
        <button onClick={deleteEmployeeToggler}>DELETE EMPLOYEE</button>
      </div>
      <div>
        {props.data.map((datas) => (
          <div key={datas.empId} className={classes.resultComponent}>
            <div className={classes.dataBlock}>
              <div> {datas.empId}</div>
              <div> {datas.empName}</div>
              <div> {datas.department}</div>
              <div> {datas.dateOfJoining}</div>
            </div>
            <Delete
              isActive={deleteActive}
              parent={"Employee"}
              keyToDelete={datas.empId}
            ></Delete>
          </div>
        ))}
      </div>
    </div>
  );
}
export default EmployeeItem;
