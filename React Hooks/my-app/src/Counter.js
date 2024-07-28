import React, { useState, useEffect} from 'react';


export default function Counter({initialCount}) {

    const [count, setCount] = useState(initialCount);
    const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(tasks => setTasks(tasks))

        document.title = `You cliked ${count} times`;
    },[])

  return (
    <div>
        Count: {count}
        <button onClick={() =>setCount(initialCount)}>Reset</button>
        <button onClick={() =>setCount(count + 1)}>Increment</button>
        <button onClick={() =>setCount(count - 1)}>Decrement</button>
        Tasks count: {tasks.length}
    </div>
  )
}

