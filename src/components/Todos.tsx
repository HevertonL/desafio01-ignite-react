import styles from "./Todos.module.css"
import {PlusCircle} from "phosphor-react";
import { Tasks } from "./Tasks";
import { useState } from "react";


export function Todos() {
  const [tasks, setTask] = useState<string[]>([]);
  const [description, changeDescription]= useState<string>("");

  return (
    <main className={styles.newTask}>
      
      <div className={styles.addTodo}>
        <input className={styles.textTodo} onChange={(e)=> changeDescription(e.target.value)}
          type="text" 
          placeholder=" Adicione uma nova tarefa"
        />
        <button type="submit" onClick={() => setTask([...tasks, description])}>
          <p>Criar</p> 
          <PlusCircle color="#F2F2F2"size={16}/>
        </button>
      </div>

      <div className={styles.taskList}>
        
        <header className={styles.createdAndCompletedHeader}>

          <strong className={styles.createdTasksHeader}>
            <span>Tarefas criadas<p>{tasks.length}</p></span>
          </strong>

          <strong className={styles.completedTasksHeader}>
            <span>Concluídas<p>2 de {tasks.length}</p></span>
          </strong>

        </header>

        {tasks.map((item, index)=>{
          return <Tasks  item={item} key={index} />
        })}
       
      </div>

    </main>
  )
}