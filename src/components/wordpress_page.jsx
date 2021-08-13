import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Unallocated from './unallocated';
import Other from './other';
import Pairings from './pairings';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function WordpressPage() {
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
          <Pairings/>
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
        <Other/>
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
        <Unallocated />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}