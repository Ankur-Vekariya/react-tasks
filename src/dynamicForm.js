import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DynamicForm() {
  const navigate = useNavigate();
  let dataTemplet = { name: "", email: "" };
  const [dynamicForm, setDynamicForm] = useState([dataTemplet]);

  useEffect(() => {
    console.log("dynamicForm", dynamicForm);
  }, [dynamicForm]);

  const addField = () => {
    setDynamicForm([...dynamicForm, dataTemplet]);
  };
  const onChange = (e, parentIndex) => {
    let updateData = dynamicForm.map((item, index) =>
      index === parentIndex
        ? Object.assign(item, { [e?.target?.name]: e?.target?.value })
        : item
    );
    setDynamicForm(updateData);
    // console.log("updateData", updateData, e.target.value);
  };
  const onRemove = (parentIndex) => {
    let filteredData = [...dynamicForm];
    filteredData.splice(parentIndex, 1);
    setDynamicForm(filteredData);
  };

  return (
    <div>
      <button
        onClick={() => {
          addField();
        }}
      >
        Add
      </button>
      {dynamicForm?.length > 0 &&
        dynamicForm?.map((parent, parentIndex) => {
          return (
            <div
              style={{
                border: "1px solid black",
                width: "50%",
                padding: "10px",
                display: "flex",
              }}
              key={parentIndex}
            >
              <div style={{ display: "flex" }}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={parent.name}
                  onChange={(e) => {
                    onChange(e, parentIndex);
                  }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={parent.email}
                  onChange={(e) => {
                    onChange(e, parentIndex);
                  }}
                />
              </div>
              {parentIndex !== 0 && (
                <button
                  onClick={() => {
                    onRemove(parentIndex);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
      <button
        onClick={() => {
          localStorage.setItem("formData", JSON.stringify(dynamicForm));
          navigate("/preview");
        }}
      >
        Save
      </button>
    </div>
  );
}

export default DynamicForm;
