import React, {createContext, useContext, useState}  from 'react'


const TaskContext = createContext()


function TaskContextProvider({children}) {
  const dummy_task_data = [
    { id:1, text: "task 1", state: "allocated", type: "pairing" },
    { id:2, text: "task 2", state: "allocated", type: "pairing" },
    { id:3, text: "task 3", state: "unallocated", type: "pairing" },
    { id:4, text: "task 4", state: "allocated", type: "other" },
    { id:5, text: "task 5", state: "unallocated", type: "other" }
  ]

  const [tasks, setTasks] = useState(dummy_task_data);
  
  const updateTaskFn = (id, allocated) => {
    setTasks(state => {
      const otherTasks = state.filter(task => task.id !== id);
      const theTask = state.filter(task => task.id === id)[0];
      return [...otherTasks, {...theTask, state: allocated}];
    })
  }
  
  const initialState = {
    tasks: tasks,
    updateTask: updateTaskFn
  }
  return <TaskContext.Provider value={initialState}>{children}</TaskContext.Provider>
}

function useTaskContext() {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskContextProvider')
  }
  return context
}

export {TaskContextProvider, useTaskContext}