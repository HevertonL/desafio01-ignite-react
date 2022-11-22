import styles from "./Todos.module.css"
import {PlusCircle, Trash} from "phosphor-react";

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

      
    </main>
  )
}