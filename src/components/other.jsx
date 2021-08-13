import React from 'react';
import { useTaskContext } from './task_provider'
import SharedTaskComponent from './shared_task_component';

export default function Other() {

  const { tasks, updateTask } = useTaskContext();

  return (
    <SharedTaskComponent tasks={
      tasks.filter(task => task.state === "allocated" && task.type !== "pairing")
    }
    onUpdateTask={updateTask}
    />
  )
}
 