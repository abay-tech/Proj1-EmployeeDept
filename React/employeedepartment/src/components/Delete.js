import classes from "./Item.module.css";

function Delete(props) {
  function deleteHandler() {
    if (props.isActive) {
      if (props.parent === "Department") {
        deleteDepartment();
      } else if (props.parent === "Employee") {
        deleteEmployee();
      }
    } else {
      alert("Please toggle Delete button to access");
    }
  }

  function deleteEmployee() {
    alert("deleteEmployee " + props.keyToDelete);
    fetch("" + process.env.REACT_APP_API + "Employee?key="+props.keyToDelete, {
      method: "DELETE",      
    }).then((response) => {
      console.log(response.json);
      return response.json;
    });
  }

  function deleteDepartment() {
    alert("deleteDepartment " + props.keyToDelete);
    fetch("" + process.env.REACT_APP_API + "Department?key="+props.keyToDelete, {
      method: "DELETE",      
    }).then((response) => {
      console.log(response.json);
      return response.json;
    });
  }
  return (
    <div className={classes.deleteTag} onClick={deleteHandler}>
      {props.isActive && (
        <div>
          <svg
            className={classes.deleteTagOn}
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </div>
      )}
      {!props.isActive && (
        <div>
          <svg
            className={classes.deleteTagOff}
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </div>
      )}
    </div>
  );
}
export default Delete;
