import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  root: {
    display: 'flex',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  weightGrid: {
      backgroundColor: '#fbfbfb',
      borderRadius: 5,
      marginTop: 30,
     
  },

    GroupButton: {
        color: '#ffffff',
        backgroundColor: '#F28F16',
        boxShadow: 'none',

        '& .MuiButtonGroup-groupedHorizontal': {
            '&:hover': {
                color: '#ffffff',
                    backgroundColor: '#F28F16',
            },
        },
    },

 
}));

export const OrderGeneral = () => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
      <div className={classes.root}>
    
      <CssBaseline />
      <div className={classes.paper}>
          
      
      <Typography variant="h6">General Details</Typography>
        <form className={classes.form} noValidate>
           
          <Grid container spacing={2} >
          <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
   
     
          <DateTimePicker
        label="Date Created"
        inputVariant="outlined"
        fullWidth
        value={selectedDate}
        onChange={handleDateChange}
        size="small"
      />
    
      
    
    </MuiPickersUtilsProvider>
    
    
     
         <br /> <br />
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="product-title"
                label="Status"
                name="Street Address 1"
                
              />
            </Grid>
            <br /><br /><br /><br />
            
            <Grid item xs={12}>
         
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="product-title"
                label="Customer"
                name="address"
               
              />
            </Grid>
            <br /><br /><br /><br />

            <Grid item xs={6}>
           
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="product-title"
                label="State"
                name="Product Title"
                autoComplete="email"
              />
            </Grid>
            <br /><br /><br /><br />

            <Grid item xs={6}>
           
            
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="product-title"
                label="City"
                name="Product Title"
                
              />
            </Grid>
            <br /><br /><br /><br />




         

      
              
          </Grid>
         
       
        </form>
      </div>
      </div>
    
    
  );
}

