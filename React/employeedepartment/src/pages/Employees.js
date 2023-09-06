import { useState, useEffect } from "react";
import EmployeeItem from "../components/EmployeeItem";
function Employees() {
  const [isLoading, setIsLoading] = new useState(true);
  const [loadedData, setLoadedData] = new useState([]);


  useEffect(() => {
    setIsLoading(true);
    fetch("" + process.env.REACT_APP_API + "Employee")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLoadedData(data);
      });
    setIsLoading(false);
  }, []);
  return (
    <div>
      {isLoading && <div>LOADING</div>}
      {!isLoading && (
        <div>
          <EmployeeItem data={loadedData}></EmployeeItem>
        </div>
      )}
    </div>
  );
}
export default Employees;
