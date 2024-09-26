import React, { useState } from "react";

function Form() {
  const [dynamicForm, setDynamicForm] = useState([
    [{ id: 0, name: "", checked: false, radio: "", select: "" }],
  ]);
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log("dynamicForm", dynamicForm);

  return (
    <div>
      <button
        onClick={() => {
          setParentCount(parentCount + 1);
          let data = [...dynamicForm];
          
          // console.log("data----------", newArr);
          setDynamicForm([...data]);
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
              }}
              key={parentIndex}
            >
              <button
                onClick={() => {
                  setChildCount(childCount + 1);
                  dynamicForm[parentIndex] = [
                    ...dynamicForm[parentIndex],
                    {
                      id: childCount + 1,
                      name: "",
                      checked: false,
                      radio: "",
                      select: "",
                    },
                  ];
                }}
              >
                Add
              </button>
              {parent?.length > 0 &&
                parent?.map((child, childIndex) => {
                  return (
                    <div
                      style={{
                        border: "1px solid black",
                        padding: "10px",
                      }}
                      key={childIndex}
                    >
                      <div style={{ display: "flex" }}>
                        <label>Name</label>
                        <input
                          type="text"
                          onChange={(e) => {
                            dynamicForm[parentIndex][childIndex] = {
                              ...dynamicForm[parentIndex][childIndex],
                              name: e.target.value,
                            };
                          }}
                        />
                      </div>
                      <div style={{ display: "flex" }}>
                        <label>Email</label>
                        <input
                          type="email"
                          onChange={(e) => {
                            dynamicForm[parentIndex][childIndex] = {
                              ...dynamicForm[parentIndex][childIndex],
                              email: e.target.value,
                            };
                          }}
                        />
                      </div>
                      <button
                        onClick={() => {
                          setChildCount(childCount + 1);
                          dynamicForm[parentIndex] = [
                            ...dynamicForm[parentIndex],
                            {
                              id: childCount + 1,
                              name: "",
                              checked: false,
                              radio: "",
                              select: "",
                            },
                          ];
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              <button
                onClick={() => {
                  setParentCount(parentCount + 1);
                  let data = dynamicForm.map((item, index) => {
                    if (
                      index !== 0 &&
                      item[parentIndex]?.id === parent[parentIndex]?.id
                    ) {
                      return item;
                    }
                  });
                  console.log("data----------", data);
                  setDynamicForm([...data]);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      <button onClick={() => {}}>Save</button>
    </div>
  );
}

export default Form;
