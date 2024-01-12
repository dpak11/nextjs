"use client"
import style from './page.module.css'

export default function TaskList() {
  const tasks = [
    {
      id:1,
      title: "Exercise",
      description: "This contains information on the Exercise task.",
      status: "pending",
      due_date: "3/4/2024",
    },
    {
      id:2,
      title: "Cook",
      description: "Prepare a list of ingredients for cooking",
      status: "pending",
      due_date: "30/4/2024",
    },
    {
      id:3,
      title: "Eat",
      description: "This contains information on the Morning breakfast",
      status: "completed",
      due_date: "3/5/2024",
    },
  ];

  const deleteTask = (id) => {
    console.log("Deleted", id)
  }

  return (
    <>
      <h3>Task Lists:</h3>
      <main className={style.main}>
        {tasks.map((task) => (
            <div className={style.item} key={task.id}>
                <div className={style.title}>{task.title} <span className={style.due}>(Due on: {task.due_date})</span></div>
                <div className={style.description}>{task.description}</div>
                <div className={task.status === 'completed' ? style.completed : style.pending}>{task.status}</div>
                <button className={style.delete} onClick={() => deleteTask(task.id)}>Delete Task</button>
            </div>
        ))}
      </main>
    </>
  );
}
