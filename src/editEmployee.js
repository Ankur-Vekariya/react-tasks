import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditEmployee() {
  const { state } = useLocation();

  const [employeeDetail, setEmployeeDetail] = useState({
    id: state?.item.id ? state?.item.id : "",
    employeeName: state?.item.employeeName ? state?.item.employeeName : "",
    email: state?.item.email ? state?.item.email : "",
    mobileNumber: state?.item.mobileNumber ? state?.item.mobileNumber : "",
    date: state?.item.date ? state?.item.date : "",
  });

  const onSave = async () => {
    let data = localStorage.getItem("employee");
    data = data && JSON.parse(data);
    let arr = data ? [...data] : [];
    if (!!state?.item.id) {
      let updatedArr = arr.map((item) => {
        if (item.id === state?.item.id) {
          return {
            ...item,
            employeeName: employeeDetail.employeeName,
            email: employeeDetail.email,
            mobileNumber: employeeDetail.mobileNumber,
            date: employeeDetail.date,
          };
        } else {
          return item;
        }
      });
      localStorage.setItem("employee", JSON.stringify(updatedArr));
    } else {
      await arr.push({
        id: Math.random(),
        employeeName: employeeDetail.employeeName,
        email: employeeDetail.email,
        mobileNumber: employeeDetail.mobileNumber,
        date: employeeDetail.date,
      });
      localStorage.setItem("employee", JSON.stringify(arr));
    }
  };
  return (
    <div>
      <p>add Employee</p>
      <form>
        <p>employeeName</p>
        <input
          title="employeeName"
          type={"text"}
          onChange={(e) => {
            setEmployeeDetail({
              ...employeeDetail,
              employeeName: e.target.value,
            });
            console.log(e.target.value);
          }}
          value={employeeDetail.employeeName}
        />
        <p>Email</p>

        <input
          title="Email"
          type={"text"}
          onChange={(e) => {
            setEmployeeDetail({ ...employeeDetail, email: e.target.value });
            console.log(e.target.value);
          }}
          value={employeeDetail.email}
        />
        <p>mobileNumber</p>

        <input
          title="mobileNumber"
          type={"text"}
          onChange={(e) => {
            setEmployeeDetail({
              ...employeeDetail,
              mobileNumber: e.target.value,
            });
            console.log(e.target.value);
          }}
          value={employeeDetail.mobileNumber}
        />
        <p>date</p>

        <input
          title="date"
          type={"date"}
          onChange={(e) => {
            setEmployeeDetail({ ...employeeDetail, date: e.target.value });
            console.log(e.target.value);
          }}
          value={employeeDetail.date}
        />
      </form>
      <button onClick={onSave}>Save</button>
    </div>
  );
}
