
import style from "../page.module.css";

export default function TaskItem(props) {

  const { id, title, description, due_date, status} = props.task;
  console.log(props)

  return (
    <div className={style.item}>
        <div className={style.taskCell} style={{cursor:"pointer"}} onClick={() => props.showDetails(id)}>
            <div className={style.title}>
                {title} <span className={style.due}>(Due on: {due_date})</span>
                <span className={`${style.status} ${status === "completed" ? style.completed : style.pending}`} 
                onClick={(e) => props.toggleStatus(e, id, status === "completed" ? "pending" : "completed")}>
                Status: {status}
            </span>
            </div>
            
            <div className={style.description}>{description}</div>
       </div>
       <div>
        <button className={style.delete} onClick={() => props.deleteTask(id)}>
            Delete Task
        </button>
      </div>
    </div>
  );
}
