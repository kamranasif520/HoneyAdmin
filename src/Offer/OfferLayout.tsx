import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SingleOfferBottom } from './SingleOfferBottom';
import { SingleOfferLeft } from './SingleOfferLeft';
import { SingleOfferRight } from './SingleOfferRight';




const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(2),
    overflow: 'hidden',
    
      
    
},

   
      fixedHeightPaperShipping: {
            height: 1200,
        boxShadow: 'none',
        padding: theme.spacing(4),

      
      },



      fixedHeightPaperDetail: {
      height: 1200,
        boxShadow: 'none',
        padding: theme.spacing(4),
      },

      
      fixedHeightPaperForm: {
       
          boxShadow: 'none',
          padding: theme.spacing(4),
        },

        fixedHeightPaperGallery: {
       
            boxShadow: 'none',
            padding: theme.spacing(4),
          },

}));



export const OfferLayout = () => {
    const classes = useStyles();
    return(
        <Grid container className={classes.root} spacing={2}>

        <Grid item lg={5} md={5} xs={12}>
            <Paper className={classes.fixedHeightPaperShipping}>
            <SingleOfferLeft />
            </Paper>
        </Grid>

       
           <Grid item lg={7} md={7} xs={12}>
           <Paper className={classes.fixedHeightPaperDetail}>
               
       <SingleOfferRight />
           </Paper>
           </Grid>

           
           <Grid item lg={12} md={12} xs={12}>
           <Paper className={classes.fixedHeightPaperForm}>
               
           <SingleOfferBottom />
           </Paper>
           </Grid>

           
       </Grid>
       
       
    )
}