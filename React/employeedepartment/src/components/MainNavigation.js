import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  return (
    <div className={classes.menu}>
      <nav>
        <h3 className={classes.menuHeading}>MENU</h3>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/Employees">EMPLOYEES</Link>
          </li>
          <li>
            <Link to="/Departments">DEPARTMENTS</Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
export default MainNavigation;
