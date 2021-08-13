import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

export default function SharedTaskComponent({ tasks, onUpdateTask }) {

  return (
    <List component="nav">
      {
        tasks.map(task =>
          <ListItem>
            <ListItemText primary={task.text} />
            {task.state === "allocated" &&
              <Button onClick={e => onUpdateTask(task.id, "unallocated")}>Unallocate</Button>
            }

            {task.state === "unallocated" &&
              <Button onClick={e => onUpdateTask(task.id, "allocated")}>Allocate</Button>
            }

          </ListItem>
        )
      }
    </List>
  )
}

SharedTaskComponent.propTypes = {
  tasks: PropTypes.array.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
};
