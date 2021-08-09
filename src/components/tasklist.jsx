import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTaskContext } from './task_provider'
import PropTypes from 'prop-types';

export default function Tasklist({ mode }) {

  const { tasks, updateTask } = useTaskContext();

  const filterTasks = (tasks) => {
    if (mode === "pairings") {
      return tasks.filter(task => task.state === "allocated" && task.type === "pairing");
    }

    if (mode === "other") {
      return tasks.filter(task => task.state === "allocated" && task.type !== "pairing");
    }

    return tasks.filter(task => task.state === "unallocated");
  }

  return (
    <List component="nav">
      {
        filterTasks(tasks).map(task =>
          <ListItem>
            <ListItemText primary={task.text} />
            {task.state === "allocated" &&
              <Button onClick={e => updateTask(task.id, "unallocated")}>Unallocate</Button>
            }

            {task.state === "unallocated" &&
              <Button onClick={e => updateTask(task.id, "allocated")}>Allocate</Button>
            }

          </ListItem>
        )
      }
    </List>
  )
}

Tasklist.propTypes = {
  mode: PropTypes.string
};
