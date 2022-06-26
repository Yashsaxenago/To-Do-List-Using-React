import './App.css';
import IconButton  from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {useState} from 'react';

function App() {
  //hooks
  const[todoText, setTodoText] = useState('')
  const[todoList, setTodoList] = useState([])
  const handleChange=(event)=>{
    setTodoText(event.target.value);
  }

  //function expression
  const handleSubmit=(event)=>{
    event.preventDefault()
    setTodoList((arr)=> [...arr, todoText])
   // console.log(todoList)
    setTodoText('')
  }

  const deleteTodo=(key)=>{
    todoList.splice(key,1)
    setTodoList((arr)=> [...arr])
  }

  return (
    <div className="app">
      <div className='header'>
      <h1>Todolist</h1>

</div>
<h3>What Do You Want To Do ?</h3>
<form>
  <input value={todoText} onChange={handleChange} type='text'/>
  <button onClick={handleSubmit} type='Submit'>Submit</button>
</form>

{todoList.map((td, index) => td && (
<div key ={index} className='todo'>
  <input type='checkbox'/>
  <p>{td}</p>
  <IconButton onClick={() => deleteTodo(index)}>
<DeleteIcon/>
</IconButton>
</div>
))}
    </div>
  );
}

export default App;