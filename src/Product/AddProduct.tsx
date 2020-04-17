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

export const AddProduct = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
    
      <CssBaseline />
      <div className={classes.paper}>
          <Grid item xs={12} >
          <ButtonGroup variant="contained" className={classes.GroupButton}>
            <Button startIcon={<AddIcon />}   className={classes.GroupButton}>Add</Button>
            <Button startIcon={<UpdateIcon />} className={classes.GroupButton}>Update</Button>
            <Button startIcon={<DeleteIcon />} className={classes.GroupButton}>Delete</Button>
            </ButtonGroup>
          </Grid>
          <br />
      <Typography variant="h6">Product Details</Typography>
        <form className={classes.form} noValidate>
           
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="product-title"
                label="Product Title"
                name="Product Title"
                autoComplete="email"
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
                rows="5"
                id="product-title"
                label="Product Short Description"
                name="Product Title"
                autoComplete="email"
              />
            </Grid>
            <br /><br /><br /><br /><br /><br />
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                size="small"
                fullWidth
                id="firstName"
                label="Min Price"
                autoFocus
              />
            </Grid>
          
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="lastName"
                label="Max Price"
                name="lastName"
                autoComplete="lname"
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
                rows="8"
                id="product-title"
                label="Product Long Description"
                name="Product Title"
                autoComplete="email"
              />
            </Grid>
            <br /><br /><br /><br />
            <Grid item xs={12}>
            <Typography variant="h6">Honey Characteristics</Typography>
            <br />
           
            <NativeSelect
                placeholder="Mono-Floral"
                name="age"
                variant="outlined"
                fullWidth
                
                >
                <option value={10}>Mono-Floral</option>
                <option value={10}>Multi-Flora</option>
               
                </NativeSelect>
                <br /><br /> <br />
                <NativeSelect
                placeholder="Mono-Floral"
                name="age"
                variant="outlined"
                fullWidth
                
                >
                <option value={10}>Raw</option>
                <option value={10}>Pasteurized</option>
               
                </NativeSelect>
                </Grid>
                

                <Grid item xs={12} sm={6}>
                <br /><br />
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                size="small"
                fullWidth
                id="firstName"
                label="TA"
                autoFocus
              />
            </Grid>
          
            <Grid item xs={12} sm={6}>
            <br /><br />
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="lastName"
                label="MGP"
                
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            
            <Grid item xs={12}>
            <br />
            <NativeSelect
                placeholder="Mono-Floral"
                name="age"
                variant="outlined"
                fullWidth
                
                >
                <option value={10}>Organic</option>
                <option value={10}>Non-Organic</option>
               
                </NativeSelect>

            </Grid>


            <Grid item xs={12} sm={6}>
                <br /><br />
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                size="small"
                fullWidth
                id="firstName"
                label="Country Of Origion"
                autoFocus
              />
            </Grid>
          
            <Grid item xs={12} sm={6}>
            <br /><br />
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="lastName"
                label="Country Packaged"
                
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
                
            <Grid item xs={12}>
            <br />
                <TextField
                required
                fullWidth
                size="small"
                label="No"
                variant="outlined"
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <br /><br />
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                size="small"
                fullWidth
                id="firstName"
                label="Percentage Of Impoted Products"
                autoFocus
              />
            </Grid>
          
            <Grid item xs={12} sm={6}>
            <br /><br />
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="lastName"
                label="Origin of Imported Products"
                
                name="lastName"
                autoComplete="lname"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
                <br /><br />
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                size="small"
                fullWidth
                id="firstName"
                label="Moisture"
                autoFocus
              />
            </Grid>
          
            <Grid item xs={12} sm={6}>
            <br /><br />
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="lastName"
                label="Energy/Carbs"
                
                name="lastName"
                autoComplete="lname"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
                <br /><br />
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                size="small"
                fullWidth
                id="firstName"
                label="Antioxidants"
                autoFocus
              />
            </Grid>
          
            <Grid item xs={12} sm={6}>
            <br /><br />
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="lastName"
                label="Glucose Index GI"
                
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="lastName"
                label="HMF"
                
                name="lastName"
                autoComplete="lname"
              />
            </Grid>

            <Grid item xs={12}>
            <br />
            <NativeSelect
                placeholder="Product Typer"
                name="age"
                variant="outlined"
                fullWidth
                
                >
                <option value={10}>Simple</option>
                <option value={10}>Non-Organic</option>
               
                </NativeSelect>

            </Grid>
              
           
              
          </Grid>
         
       
        </form>
      </div>
      </div>
    
    
  );
}

