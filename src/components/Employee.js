import React from "react";
import { useNavigate } from "react-router-dom";

export default function Employee({ employee }) {
  const navigate = useNavigate();

  const onRemove = (id) => {
    localStorage.removeItem("employee");
    let arr = [];
    employee.forEach((element) => {
      if (element.id != id) {
        arr.push(element);
      }
    });
    localStorage.setItem("employee", JSON.stringify(arr));
  };

  return (
    <div className="App">
      <table>
        <caption>Employee Directory</caption>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">email</th>
            <th scope="col">mobileNumber</th>
            <th scope="col">date</th>
            <th scope="col">action</th>
          </tr>
        </thead>

        <tbody>
          {employee != null &&
            employee.length > 0 &&
            employee?.map((item, index) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.employeeName}</td>
                  <td>{item.email}</td>
                  <td>{item.mobileNumber}</td>
                  <td>{item.date}</td>
                  {/* <td>{item.total}</td> */}
                  <td>
                    <button
                      onClick={() => {
                        navigate("/edit-employee", {
                          state: {
                            item: item,
                          },
                        });
                        // onEdit(item.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        onRemove(item.id);
                      }}
                    >
                      remove
                    </button>
                    <button
                      onClick={() => {
                        // onRemoveAll(item.id);
                      }}
                    >
                      remove all
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
