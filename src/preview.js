import React, { useEffect, useState } from "react";

function Preview() {
  const [dynamicFormData, setDynamicFormData] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("formData");

    setDynamicFormData(JSON.parse(data));
  }, []);

  return (
    <div>
      {dynamicFormData?.length > 0 &&
        dynamicFormData?.map((item, index) => {
          return (
            <div
              style={{ border: "2px solid black", display: "flex" }}
              key={index}
            >
              <div style={{ padding: 10, display: "flex" }}>
                <label>name</label>
                <p>{item.name}</p>
              </div>
              <div style={{ padding: 10, display: "flex" }}>
                <label>email</label>
                <p>{item.email}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Preview;
