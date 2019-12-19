import React,{Component} from 'react';
import './App.css';


import tasks from './sample/tasks.json'
// Components
import Tasks from './components/Tasks.js'

import TaskForm from './components/TaskForm'

class App extends Component{ //Ya importa component arriba

state={
  tasks: tasks
}

addTask=(title, description)=>{
  const newTask = {
    title: title,
    description: description,
    id: this.state.tasks.length
  }
  this.setState({
    tasks: [...this.state.tasks, newTask]
  })
  
}
//iterar array de tareas con map
// pasar las props 'tasks'
  render(){
    return <div>
      <TaskForm addTask={this.addTask}/>
     <Tasks tasks={this.state.tasks}/>
    </div>
  }

}



export default App;
