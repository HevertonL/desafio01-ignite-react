import styles from "./Todos.module.css"
import {PlusCircle} from "phosphor-react";
import { Tasks } from "./Tasks";
import { ChangeEvent, FormEvent, useState } from "react";

export function Todos() {

  const [tasks, setTasks] = useState<string[]>([])
  const [newDescriptionTask, setnewDescriptionTask] = useState("")

  function handleCreateNewTask(e:FormEvent) {
    e.preventDefault();
    
    setTasks([...tasks, newDescriptionTask]);
    setnewDescriptionTask('');
    
  }

  function handleNewTaskChange(e:ChangeEvent<HTMLInputElement>){
    setnewDescriptionTask(e.target.value)
  }

  return (
    <section className={styles.newTask}>
      
      <form onSubmit={handleCreateNewTask} className={styles.addTodo}>
        <input 
          className={styles.textTodo}
          onChange={handleNewTaskChange}
          value={newDescriptionTask} 
          type="text" 
          placeholder=" Adicione uma nova tarefa"
        />
        <button type="submit">
          <p>Criar</p> 
          <PlusCircle size={16} color="#F2F2F2"/>
        </button>
      </form>

      <div className={styles.taskList}>
        
        <header className={styles.createdAndCompletedHeader}>

          <strong className={styles.createdTasksHeader}>
            <span>Tarefas criadas<p>{tasks.length}</p></span>
          </strong>

          <strong className={styles.completedTasksHeader}>
            <span>Concluídas<p>2 de {tasks.length}</p></span>
          </strong>

        </header>

        <main>
          {tasks.map(task => {
               return <Tasks description={task}/>
            })
          }
        </main>
       
      </div>

    </section>
  )
}