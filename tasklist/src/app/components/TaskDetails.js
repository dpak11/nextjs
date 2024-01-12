import { useEffect, useState } from "react";
import style from "../page.module.css";

export default function TaskDetails(props) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDetails = async () => {
      const res = await fetch(`/api/details/${props.id}`);
      const data = await res.json();
      if(data.taskDetail){
        setDetails(data.taskDetail);
        console.log(details)
      }
      if(data.error){
        setError(data.error);
      }
      
      console.log(data.taskDetail);
    };
    getDetails();
  }, []);

  return (
    <div>
      <h2>Details Page</h2>
      {details && (
        <div>
          <div>
            {details.title} <span>(Due on: {details.due_date})</span>
            <div>Status: {details.status}</div>
          </div>

          <div>{details.description}</div>
        </div>
      )}
      {error && <div className={style.error}>{error}</div>}
    </div>
  );
}
