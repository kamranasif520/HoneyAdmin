import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import { Card, CardActionArea, CardContent, CardMedia, CardActions } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';



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
  card: {
    maxWidth: 430,
    boxShadow: 'none',
  },
  media: {
    height: 330,
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

export const SingleOfferLeft = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
    
      <CssBaseline />
      <div className={classes.paper}>
          
      
      <Typography variant="h6">Product Details</Typography>
      <br />
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://unblast.com/wp-content/uploads/2019/03/Honey-Jar-Mockup-1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="h2">
            Product: Beewell Honey TA 15
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="h2">
            Regular Price: 12-15 AUD/kg
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Jarrah
        </Button>
        <Button size="small" color="primary">
          Organic
        </Button>
      </CardActions>
    </Card>
        <form className={classes.form} noValidate>
           
          <Grid container spacing={2} >
          <Grid item xs={12}>
          <InputLabel>Shipping</InputLabel>
          <br />
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="product-title"
                label="CNF"
                name="Product Title"
                autoComplete="email"
              />
            </Grid>
            <br /><br /><br /><br />
            
            <Grid item xs={12}>
            <InputLabel>Delivery Schedule</InputLabel>
            <br />
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="product-title"
                label="I want my purchase to be shipped as one shipment"
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
                id="product-title"
                label="Within 48 Hours"
                name="Product Title"
                autoComplete="email"
              />
            </Grid>
            <br /><br /><br /><br />

            <Grid item xs={12}>
            <InputLabel>Packaging Specification</InputLabel>
            <br />
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="product-title"
                label="Bulk IBC 1000L"
                name="Product Title"
                
              />
            </Grid>
            <br /><br /><br /><br />

            <Grid item xs={12}>
            <InputLabel>Activity Certificate Required</InputLabel>
            <br />
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="product-title"
                label="Yes"
                name="Product Title"
                autoComplete="email"
              />
            </Grid>
            <br /><br /><br /><br />


           

          
              
           
              
          </Grid>
         
       
        </form>
      </div>
      </div>
    
    
  );
}

