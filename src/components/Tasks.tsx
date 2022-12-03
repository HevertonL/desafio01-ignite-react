import { Trash } from "phosphor-react"
import styles from "./Tasks.module.css"

export function Tasks () {
  return(
    <div className={styles.task}>
          <input className={styles.checkbox} 
            type="checkbox"
            
          />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <Trash color="#fff" size={24}/>
    </div>
  )
}