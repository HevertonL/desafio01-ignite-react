import { Trash } from "phosphor-react"
import styles from "./Tasks.module.css"

interface Task {
  description: string;
}

export function Tasks ({description}:Task) {
  return(
    <div className={styles.task}>
          <input className={styles.checkbox} 
            type="checkbox"
          />
          
          <p>{description}</p>

          <Trash color="#fff" size={24}/>
          
          
    </div>
  )
}