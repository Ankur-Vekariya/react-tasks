import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Todo() {
  const { state } = useLocation();

  const [taskDetail, setTaskDetail] = useState({
    taskDetail: "",
    date: "",
    time: "",
  });

  const [tasks, setTasks] = useState([]);
  const [sortedTasks, setSortedTasks] = useState([]);

  const onSave = () => {
    let arr = [
      ...tasks,
      {
        taskDetail: taskDetail.taskDetail,
        date: new Date(taskDetail.date),
        time: taskDetail?.time,
      },
    ];
    arr = arr.sort((a, b) => a.date - b.date);
    arr = arr.sort((a, b) => {
      if (a.date === b.date) {
        return a.time.localeCompare(b.time);
      }
    });
    setTasks(arr);
  };

  // useEffect(() => {
  //     console.log("useeffect---------",tasks);
  //     let arr = tasks.sort((a, b) => a.date - b.date)
  //   setTasks(arr)
  // }, [tasks])

  console.log("tasks---------", tasks);

  return (
    <div>
      <p>add Employee</p>
      <form onSubmit={onSave}>
        <p>Task Detail</p>
        <input
          title="employeeName"
          type={"text"}
          onChange={(e) => {
            setTaskDetail({
              ...taskDetail,
              taskDetail: e.target.value,
            });
            console.log(e.target.value);
          }}
          value={taskDetail.taskDetail}
        />
        <p>date</p>

        <input
          title="date"
          type={"date"}
          onChange={(e) => {
            setTaskDetail({ ...taskDetail, date: e.target.value });
            console.log(e.target.value);
          }}
          value={taskDetail.date}
        />
        <p>Time</p>

        <input
          title="time"
          type={"time"}
          onChange={(e) => {
            console.log(e.target.value);
            setTaskDetail({ ...taskDetail, time: e.target.value });
          }}
          value={taskDetail.time}
        />
      </form>
      <button type="submit" onClick={onSave}>
        Save
      </button>
      {!!tasks &&
        tasks?.length > 0 &&
        tasks.map((item, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>{item?.taskDetail}</p>
                <p>{new Date(item.date).toDateString()}</p>
                <p>{item?.time}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
