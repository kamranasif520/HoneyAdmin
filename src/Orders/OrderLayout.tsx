import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { OrderDetailsShip } from './OrderDetailsShip';
import { OrderGeneral } from './OrderGeneral';
import { OrderItemDetails } from './OrderItemDetails';
import { OrderShipping } from './OrderShipping';



const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(2),
    overflow: 'hidden',
    
      
    
},

   
      fixedHeightPaperShipping: {
            height: 600,
        boxShadow: 'none',
        padding: theme.spacing(4),

      
      },



      fixedHeightPaperDetail: {
      height: 600,
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



export const OrderLayout = () => {
    const classes = useStyles();
    return(
        <Grid container className={classes.root} spacing={2}>

        <Grid item lg={8} md={8} xs={12}>
            <Paper className={classes.fixedHeightPaperShipping}>
            <OrderShipping />
            </Paper>
        </Grid>

       
           <Grid item lg={4} md={4} xs={12}>
           <Paper className={classes.fixedHeightPaperDetail}>
               
           <OrderGeneral />
           </Paper>
           </Grid>

           
           <Grid item lg={4} md={4} xs={12}>
           <Paper className={classes.fixedHeightPaperForm}>
               
           <OrderItemDetails />
           </Paper>
           </Grid>

           <Grid item lg={8} md={8} xs={12}>
            <Paper className={classes.fixedHeightPaperGallery}>
            <OrderDetailsShip />
            </Paper>
        </Grid>
           
       </Grid>
       
       
    )
}