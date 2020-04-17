import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Typography, Select, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      
    },
     paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
    textField: {
     
     
      width: '100%',
    
    },
    composerButton: {

        backgroundColor: '#f28f16',
        color: '#ffffff',
        boxShadow: 'none',
        marginTop: '1%',
    
      },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },

  }),
);

export const SingleOfferBottom = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       
        <div className={classes.paper}></div>
       
      <form className={classes.form} noValidate>
      
      <Grid item xs={12}>
      <br />
        <Typography variant="h6">Offer Status</Typography>
        <br />
        <Select
          native
        fullWidth
        variant="outlined"
          label="Select"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Waiting Admin Response</option>
          <option value={20}>Waiting Admin Response</option>
          <option value={30}>Waiting Admin Response</option>
        </Select>
        <br /><br />
      <Typography variant="h6">Notes For Buyers</Typography>
          <br />
        <TextField
          label=""
          id="outlined-margin-normal"
          defaultValue=""
          className={classes.textField}
          fullWidth
          multiline
          rows="5"
         
          variant="outlined"
        />
 
        </Grid>
        <Grid item lg={3} xs={12} md={3}>
            <br />
        <Button variant="contained" color="secondary" fullWidth={true} className={classes.composerButton}>
                    Update
                    </Button>
        </Grid>
        </form>
   </div>

  );
}