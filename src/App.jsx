
import './App.css'
import ClassComp from './Components/ClassComp';
import FuncComp from './Components/FuncComp';
import Counter from './Components/ClassComponent/counter';
import TodoList from './Tasks/Todolist';

function App() {
  const count = 2 +3 ;
  
  return (
      <div>
        {/* <h2>welcome to dom</h2>
       <h4>count:{count}</h4>
       <ClassComp  course="ReactJS" duration="15days"/>
       <FuncComp /> */}
       {/* <Counter /> */}
       <TodoList />
       
      </div>
    
  )
}

export default App

