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
//iterar array de tareas con map
// pasar las props 'tasks'
  render(){
    return <div>
      <TaskForm/>
     <Tasks tasks={this.state.tasks}/>
    </div>
  }

}



export default App;
