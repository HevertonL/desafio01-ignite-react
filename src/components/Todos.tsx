import styles from "./Todos.module.css"
import {PlusCircle} from "phosphor-react";
import { Tasks } from "./Tasks";

export function Todos() {

  return (
    <main className={styles.newTask}>
      
      <div className={styles.addTodo}>
        <input className={styles.textTodo} 
          type="text" 
          placeholder=" Adicione uma nova tarefa"
        />
        <button type="submit">
          <p>Criar</p> 
          <PlusCircle color="#F2F2F2"size={16}/>
        </button>
      </div>

      <div className={styles.taskList}>
        
        <header className={styles.createdAndCompletedHeader}>

          <strong className={styles.createdTasksHeader}>
            <span>Tarefas criadas<p>5</p></span>
          </strong>

          <strong className={styles.completedTasksHeader}>
            <span>Concluídas<p>2 de 5</p></span>
          </strong>

        </header>

        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
       
      </div>

    </main>
  )
}