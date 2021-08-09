import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import TaskList from './tasklist';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function TasklistContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>My Pairings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TaskList mode="pairings"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>My Tasks</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TaskList mode="other"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel23-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Unallocated Tasks</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TaskList mode="unallocated"/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}