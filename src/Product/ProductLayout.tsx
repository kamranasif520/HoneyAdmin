import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddProduct } from './AddProduct';
import { ProductGallery } from './ProductGallery';



const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(2),
    overflow: 'auto',
    
      
    
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



export const ProductLayout = () => {
    const classes = useStyles();
    return(
        <Grid container className={classes.root} spacing={2}>
        <Grid item lg={4} md={4} xs={12}>
            <Paper className={classes.fixedHeightPaperGallery}>
            <ProductGallery />
            </Paper>
        </Grid>
       
           <Grid item lg={8} md={8} xs={12}>
           <Paper className={classes.fixedHeightPaperForm}>
               
           <AddProduct />
           </Paper>
           
       </Grid>
       </Grid>
       
    )
}