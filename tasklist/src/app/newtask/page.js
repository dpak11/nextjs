// import React from 'react'
"use client"
import { useState } from "react";
import Link from "next/link"
import style from "../page.module.css";

export default function NewTask() {
  const [taskItem, setTaskItem] = useState({title:'', description:'', due_date:'', status:'pending'});
  const [error, setError] = useState("")

  const validateFields = () => {    
    if(taskItem.title.trim() == ''){
      setError("Error: Task Name is Missing");
      return false;
    }
    if(taskItem.description.trim() == ''){
      setError("Error: Description is Missing");
      return false;
    }
    if(taskItem.description.length < 10){
      setError("Error: Description is too short");
      return false;
    }
    if(taskItem.due_date === ''){
      setError("Error: Date is missing");
      return false;
    }
    return true
  }

  const addNewTask = async () => {
    const isValid = validateFields();
    if(!isValid){
      return
    }
    
    try{
      const res = await fetch(`/api/tasks`,{method:'POST', body:JSON.stringify({task: taskItem})});
      const data = await res.json();
      setTaskItem({title:'', description:'', due_date:'', status:'pending'});
      setError("");
      console.log('Item added', data.tasks);
    } catch (e){
      setError("API Error: " +e);
    }
    
  };
  return (
    <>
      <Link href="/tasklist">Show List of all tasks</Link> 
      <h2 style={{borderBottom:'2px solid gray'}}>Create a New Task</h2>
      <div style={{paddingLeft:'1em'}}>
        <p>
          <label>Task Name:</label> 
          <input type="text" placeholder="Enter Task Name" 
            value={taskItem.title} 
            onChange={(e) => setTaskItem(prev => ({...prev, title:e.target.value}))} />
        </p>
        <p>
          <label>Task Description:</label>
          <input type="text" placeholder="Enter Task description" 
           value={taskItem.description}
          onChange={(e) => setTaskItem(prev => ({...prev, description:e.target.value}))} />
        </p>
        <p>
          <label>Due Date:</label>
          <input type="date" 
          value={taskItem.due_date} 
          onChange={(e) => setTaskItem(prev => ({...prev, due_date:e.target.value}))}/>
        </p>
        <button onClick={addNewTask}>Add New Task</button>
      </div>
      {error && <div className={style.error}>{error}</div>}
    </>
  );
}
