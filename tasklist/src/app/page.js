import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Welcome to Tasks Home Page</h1>
      <Link href="/tasklist">Show List of all tasks</Link> |  <Link href="/newtask">Create New Task</Link>
      
    </div>
  );
}
