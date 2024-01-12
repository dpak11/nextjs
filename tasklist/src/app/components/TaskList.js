
import TaskItem from "./TaskItem";
import style from "../page.module.css";
import { useEffect, useState } from "react";
import Link from "next/link"

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  

  
  const deletion = async (id) => {
    const res = await fetch(`/api/tasks/${id}`,{method:'DELETE'});
    const data = await res.json();
    setTasks(data.updatedList);
    console.log(data.updatedList);
  };
  const changeStatus = async (id, status) => {
    const res = await fetch(`/api/tasks/${id}`,{method:'PATCH', body:JSON.stringify({status})});
    const data = await res.json();
    setTasks(data.updatedList);
    console.log(data.updatedList);
  };

  useEffect(() => {
    const getTaskList = async () => {
      const res = await fetch("/api/tasks");
      const data = await res.json();
      setTasks(data.taskList);
      console.log(data.taskList);
    };
    getTaskList();
  }, []);

  const toggleStatus = (id, newStatus) => {
    changeStatus(id, newStatus)
  };

  const deleteTask = (id) => {
    deletion(id);
  };

  return (
    <>
   
      <Link href="/newtask">Click here to create a New Task</Link>
      <h2>Task Lists:</h2>
      <main className={style.main}>
      <p>(Click on the status to Change)</p>
        {tasks && tasks.map((task) => (
          <TaskItem task={task} key={task.id} deleteTask={deleteTask} toggleStatus={toggleStatus} />
        ))}
      </main>
    </>
  );
}
