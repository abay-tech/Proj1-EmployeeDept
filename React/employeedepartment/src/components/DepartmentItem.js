import { useState } from "react";
import classes from "./Item.module.css";
import Delete from "./Delete";
import Add from "./Add";

function DepartmentItem(props) {
  const [deleteActive, setDeleteActive] = new useState(false);
  const [addActive, setAddActive] = new useState(false);

  function deleteDepartmentToggler() {
    if (deleteActive) {
      setDeleteActive(false);
    } else {
      setDeleteActive(true);
    }
  
  }
  function addDepartmentToggler() {
    if (addActive) {
      setAddActive(false);
    } else {
      setAddActive(true);
    }

  }

  return (
    <div>
      <Add isActive={addActive} parent={"Department"} closePopUp={addDepartmentToggler}></Add>

      <h1 className={classes.title}> DEPARTMENTS</h1>
      <div className={classes.buttonDiv}>
        <button onClick={addDepartmentToggler}>ADD DEPARTMENT</button>
        <button onClick={deleteDepartmentToggler}>DELETE DEPARTMENT</button>
      </div>
      <div>
        {props.data.map((datas) => (
          <div key={datas.deptId} className={classes.resultComponent}>
            <div className={classes.dataBlock}>
              <div> {datas.deptId}</div>
              <div>{datas.deptName}</div>
            </div>
            <Delete
              isActive={deleteActive}
              parent={"Department"}
              keyToDelete={datas.deptId}
            ></Delete>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DepartmentItem;
