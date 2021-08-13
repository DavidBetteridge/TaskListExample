import React from 'react';
import { useTaskContext } from './task_provider'
import SharedTaskComponent from './shared_task_component';

export default function Unallocated() {

  const { tasks, updateTask } = useTaskContext();

  return (
    <SharedTaskComponent tasks={
      tasks.filter(task => task.state === "unallocated")
    }
    onUpdateTask={updateTask}
    />
  )
}

