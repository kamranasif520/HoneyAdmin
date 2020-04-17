import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import { ButtonGroup, Button, Grid, Paper, Avatar } from '@material-ui/core';
import 'typeface-roboto';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 900,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
        maxWidth: 400,
         margin: `${theme.spacing(1)}px auto`,
        // padding: theme.spacing(2),
        boxShadow: 'none',
        marginLeft: '-2%',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
          },

      },
  }),
);

export const Inbox = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    
    <List className={classes.root}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
            
           
        
             <div>
           

          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            
           
            <ListItemText id={labelId} primary={`Kamran Asif ${value + 1}`} />
            <ListItemText>
            
        <Grid container wrap="nowrap" className={classes.paper} >
        
          <Grid item xs zeroMinWidth>
            <Typography noWrap variant="body2">Truncation should be conditionally applicable on this long line of text
                as this is a much longer line than what the container can support.</Typography>
          </Grid>
        </Grid>
    
      </ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
               
                <Typography variant="caption">April 10</Typography>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          </div>
        );
      })}
    </List>
  );
}