import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Select } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    // alignItems: 'center',
  },
  root: {
    display: 'flex',
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

 

 
}));

export const NewCategory = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
    
      <CssBaseline />
      <div className={classes.paper}>
        
      <Typography variant="h6">Add New Category</Typography>
        <form className={classes.form} noValidate>
           
          <Grid container spacing={2}>
          <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                
                fullWidth
                id="product-title"
                label="New Category"
                name="New Category"
                
              />
            </Grid>
            <Grid item xs={6}>
            <Select
          native
          fullWidth
          variant="outlined"
          required
          placeholder="Parent Category"
          label="Parent Category"
          name="Parent Category"
          
        >
          
          <option value={20}>Manuka-Honey</option>
          <option value={20}>Organic-Honey</option>
          <option value={30}>Jarrah-Honey</option>
        </Select>
              
            </Grid>

            <Grid item lg={3}>
                 
              <Button variant="contained" color="secondary" fullWidth={true} className={classes.composerButton}>
                    Add New
                    </Button>
                    
            </Grid>
          
           

               
              
          </Grid>
         
       
        </form>
      </div>
      </div>
    
    
  );
}

