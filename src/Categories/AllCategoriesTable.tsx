import React from 'react';
import MaterialTable from 'material-table';
import { Grid, Button, Chip, Paper } from '@material-ui/core';
import honey from './../assets/honey.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { NewCategory } from './NewCategory';







const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexGrow: 1,
      padding: theme.spacing(2),
      overflow: 'auto',
      
        
      
  },
  
     
        fixedHeightPaperEmail: {
        
          boxShadow: 'none',
          padding: theme.spacing(4),
        },
  
  }));



export const AllCategoriesTable = () => {
  const classes = useStyles();
    let id:number =1
    const getID = () => {
        return id++;
    }
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item lg={12} md={12} xs={12}>
          <Paper className={classes.fixedHeightPaperEmail}>
            <NewCategory />
          </Paper>
        </Grid>
      <Grid item lg={12} md={12} xs={12}>
          <Paper className={classes.fixedHeightPaperEmail}>
      <MaterialTable

     
   
      style={{boxShadow: 'none', backgroundColor: '#ffffff', borderBottomLeftRadius: 8, borderBottomRightRadius: 8,}}
        title="All Categories"
        columns={[
          { title: 'Category Id', render: () => <div>{getID()}</div>},
          { title: 'Name', field: 'name' },
         
        
          { title: 'Actions', render: () => 
          <Grid container spacing={2}>
        <Grid item lg={3} xs={12}>
                <Button variant="contained" size="small" style={{backgroundColor: '#f28f16', boxShadow: 'none', color: '#ffffff',}}>View</Button>
        </Grid>
          <Grid item lg={3} xs={12}>
          <Button variant="contained" size="small" style={{backgroundColor: '#FED158', boxShadow: 'none', color: '#ffffff',}}>Edit</Button>
  </Grid>
  <Grid item lg={3} xs={12}>
          <Button variant="contained" size="small" style={{backgroundColor: '#F50057', boxShadow: 'none', color: '#ffffff',}}>Delete</Button>
  </Grid>
  </Grid>
        
        },
        ]}
        data={[
          { name: 'BeeWell Honey Jar',},
          { name: 'BeeWell Honey Jar',},
          { name: 'BeeWell Honey Jar',},
          { name: 'BeeWell Honey Jar',},
          { name: 'BeeWell Honey Jar',},
        
      
          
        ]}

      
      
    
      />
      </Paper>
      </Grid>
      </Grid>
    )
  }