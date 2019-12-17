import React,{Component} from 'react';
import './App.css';


import tasks from './sample/tasks.json'

import Tasks from './components/Tasks.js'

class App extends Component{ //Ya importa component arriba

state={
  tasks: tasks
}
//iterar array de tareas con map
// pasar las props 'tasks'
  render(){
    return <div>
     <Tasks tasks={this.state.tasks}/>
    </div>
  }

}



export default App;
