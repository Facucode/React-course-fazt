import React,{Component} from 'react';
import './App.css';


import tasks from './sample/tasks.json'

class App extends Component{ //Ya importa component arriba

state={
  tasks: tasks
}
//iterar array de tareas con map
  render(){
    return <div>
    {this.state.tasks.map(e=><h1>{e.title}</h1>)}

    </div>
  }

}



export default App;
