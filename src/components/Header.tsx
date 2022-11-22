import styles from "./Header.module.css"
import rocket from "../assets/rocket.svg"
import todo from "../assets/todo.svg"

export function Header() {
  return (
    <header className={ styles.header }>
      <img className={styles.iconLogo} src={rocket} alt="logo" />
      <img className={styles.todoLogo} src={todo} alt="logo" />
    </header>
  )
}