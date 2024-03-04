import React, { useState } from "react";
import Title from "../components/Title";
import { TableStyle } from "./TableStyle";
import Task from "./Task";
import NewTask from "./NewTask";

export default function TasksTrackerApp() {
  const [newTask, setNewTask] = useState({
    date: "",
    type: "",
    completed: "",
  });

  const handleChangeDate = (e) => {
    setNewTask({
      ...newTask,
      date: e.target.value,
    });
  };

  const handleChangeType = (e) => {
    setNewTask({
      ...newTask,
      type: e.target.value,
    });
  };

  let tasks = [{ date: "", type: "" }];

  const [taskList, setTaskList] = useState(tasks);

  const addNewTask = () => {
    setTaskList([...taskList, { date: newTask.date, type: newTask.type }]);
  };

  const handleCompleted = (e) => {
    e.target.classList.toggle("completed");
  };

  const handleDeleteTask = (e) => {
    window.confirm("Are you sure you want to delete this task?")
      && e.target.parentElement.remove();
  };

  return (
    <>
      <Title text={"Tasks Tracker"} />
      <TableStyle>
        <ul className="table-head">
          <li>Data</li>
          <li>Task</li>
        </ul>
        <Task
          data={newTask.date}
          setDate={handleChangeDate}
          type={newTask.type}
          setType={handleChangeType}
          onClick={addNewTask}
        />
        <ul className="table-row">
          {taskList.map((tas, index) => {
            return tas.date !== "" && tas.type !== "" ? (
              <NewTask
                key={index}
                date={tas.date}
                type={tas.type}
                onTaskClick={handleCompleted}
                onDelete={handleDeleteTask}
              />
            ) : null;
          })}
        </ul>
      </TableStyle>
    </>
  );
}
