import React from 'react';
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
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import UpdateIcon from '@material-ui/icons/Update';


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

export const SingleOfferRight = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
    
      <CssBaseline />
      <div className={classes.paper}>
          
      
      <Typography variant="h6">Shipping Details</Typography>
        <form className={classes.form} noValidate>
           
          <Grid container spacing={2} >
          <Grid item xs={12}>
         
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="product-title"
                label="CNF"
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
                label="Street Address 2"
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

            <Grid item xs={6}>
           
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="product-title"
                label="Yes"
                name="Zip Code"
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
             label="Country"
             name="Country"
             
           />
         </Grid>
         <br /><br /><br /><br />

         <Grid item xs={12}>
           
           <TextField
             variant="outlined"
             required
             size="small"
             fullWidth
             multiline
             rows="7"
             id="notes"
             label="Customer Notes"
             name="notes"
             
           />
         </Grid>
         <br /><br /><br /><br />

         

         <Grid item lg={6} xs={12} className={classes.weightGrid} style={{padding: 25}}>
             <br />
         <Typography variant="h6">Price Offered And Weight</Typography>
         <br />
         <InputLabel>Weight (t)</InputLabel>
         <br />
           <TextField
             variant="outlined"
             required
             size="small"
             fullWidth
             
             id="notes"
             label=""
             name="notes"
             
           />
            <br /><br />
           <InputLabel>Price</InputLabel>
           <br />

            <TextField
             variant="outlined"
             required
             size="small"
             fullWidth
             defaultValue="$"
             id="price"
             label=""
             name="notes"
             
           />
         </Grid>
         <br /><br /><br /><br />

         
         <Grid item lg={6} xs={12} className={classes.weightGrid} style={{padding: 25}}>
             <br />
         <Typography variant="h6">Counter Offer</Typography>
         <br />
         <InputLabel>Weight (t)</InputLabel>
         <br />
           <TextField
             variant="outlined"
             required
             size="small"
             fullWidth
             
             id="notes"
             label=""
             name="notes"
             
           />
           <br /><br />
           <InputLabel>Price</InputLabel>
           <br />

            <TextField
             variant="outlined"
             required
             size="small"
             fullWidth
             defaultValue="$"
             id="price"
             label=""
             name="notes"
             
           />

         </Grid>
         <br /><br /><br /><br />


           

          
              
           
              
          </Grid>
         
       
        </form>
      </div>
      </div>
    
    
  );
}

