import { Trash } from "phosphor-react"
import clipboard from "../assets/clipboard.svg"
import styles from "./Tasks.module.css"

interface Task {
  description: string;
}

export function Tasks ({description}:Task) {
  return(

    <>

    <div className={styles.emptyTask}>
          <img className={styles.iconEmptyTask} src={clipboard} alt="image" />
          <div className={styles.emptyTaskText}>
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <h3>Crie tarefas e organize seus itens a fazer</h3>
          </div>
          
    </div>

    <div className={styles.task}>
          <input className={styles.checkbox} 
            type="checkbox"
          />
          
          <p>{description}</p>

          <Trash color="#fff" size={24}/>      
    </div>

    </>
    
    
    
  )
}