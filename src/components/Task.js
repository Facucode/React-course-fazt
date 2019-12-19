import React, {Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types'
class Task extends Component{

    StyleCompleted(){
        return{
            fontSize:'20px',
            color:this.props.task.done ? 'gray' : 'black',
            textDecoration:this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){
        const {task}=this.props;
        //const redColor = {background:'red'}
        return <p style={this.StyleCompleted()}> 
        {task.title} - 
        {task.description} - 
        {task.done} - 
        {task.id}
        <input type="checkbox" />
        <button style={btnDelete}>
            x
        </button>
        </p>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background:'#ea2027',
    color:'#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default Task