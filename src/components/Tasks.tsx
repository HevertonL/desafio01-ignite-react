import { Trash } from "phosphor-react"
import styles from "./Tasks.module.css"

interface Task{
  item: string;
}

export function Tasks (props : Task) {
  return(
    <div className={styles.task}>
          <input className={styles.checkbox} 
            type="checkbox"
            
          />
          <p>{props.item}</p>
          <Trash color="#fff" size={24}/>
    </div>
  )
}