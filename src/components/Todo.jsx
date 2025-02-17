import React, {useState} from 'react'
import './Todo.css';

function Todo() {

    const [task,setTask]=useState('')
    const [todos,setTodos]=useState([])
    const [position,setPosition]=useState(null)

    const handleAdd=()=>{
        setTodos([...todos,task]);
        setTask('');
    }

    const handleUpdate=(index)=>{
        setTask(todos[index]);
        setPosition(index);
    }

    const handleEdit=()=>{
        const editedtodos=[...todos];
        editedtodos[position]=task;
        setTodos(editedtodos);
        setPosition(null);
        setTask('');
    }

    const handleDelete=(index)=>{
        setTodos(todos.filter((item,i)=>i!==index))
    }
    
  return (
    <div>

        <h1>Todo list</h1>
        <input type="text" placeholder='Enter task' value={task || ''} onChange={(e)=>setTask(e.target.value)}></input>
        
        {position===null?
        <button onClick={handleAdd}>Add</button>:
        <button onClick={handleEdit}>Update</button>
        }

        <div>
            <h2>Tasks to do</h2>
            {todos.map((item,index)=>(
                <ul key={index}>
                    <li>
                        <input type="checkbox" className='checkbox' onChange={(e)=>e.target.parentNode.classList.toggle("completed")}></input>
                        <h4>{item}</h4>
                        <button onClick={()=>handleUpdate(index)}><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onClick={()=>handleDelete(index)} ><i class="fa-solid fa-trash"></i></button>
                    </li>
                </ul>
            ))}
        </div>
        
    </div>
  )
}

export default Todo