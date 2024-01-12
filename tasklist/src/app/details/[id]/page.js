"use client"

import TaskDetails from "../../components/TaskDetails";

export default function Details(props) {
  console.log(props.params.id);
  return (
      <TaskDetails id={props.params.id}/>
  );
}
