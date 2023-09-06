import { useState, useEffect } from "react";
import DepartmentItem from "../components/DepartmentItem";
function Departments() {
  const [isLoading, setIsLoading] = new useState(true);
  const [loadedData, setLoadedData] = new useState([]);
  const [refresh,setRefresh]=new useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch("" + process.env.REACT_APP_API + "Department")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLoadedData(data);
      });
    setIsLoading(false);
  }, [refresh]);


  return (
    <div>
      {isLoading && <div>LOADING</div>}
      {!isLoading && (
        <div>
          <DepartmentItem data={loadedData}></DepartmentItem>
        </div>
      )}
    </div>
  );
}
export default Departments;
