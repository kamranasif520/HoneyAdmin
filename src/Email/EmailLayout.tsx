import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { EmailEditor } from './EmailEditor';
import { Email } from './Email';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(2),
    overflow: 'auto',
    
      
    
},

   
      fixedHeightPaperEmail: {
        height: 600,
        boxShadow: 'none',
        padding: theme.spacing(4),
      },

}));



export const EmailLayout = () => {
    const classes = useStyles();
    return(
        <Grid container className={classes.root} spacing={2}>
        <Grid item lg={4} md={4} xs={12}>
            <Paper className={classes.fixedHeightPaperEmail}>
            <Email />
            </Paper>
        </Grid>
       
           <Grid item lg={8} md={8} xs={12}>
           <Paper className={classes.fixedHeightPaperEmail}>
               
           <EmailEditor />
           </Paper>
           
       </Grid>
       </Grid>
       
    )
}