import React from 'react';
import MaterialTable from 'material-table';
import { Grid, Button, Chip, Paper, Link } from '@material-ui/core';
import honey from './../assets/honey.jpg';
import { makeStyles } from '@material-ui/core/styles';








const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexGrow: 1,
      padding: theme.spacing(2),
      overflow: 'auto',
      
        
      
  },

  
  btnStyle: {

    backgroundColor: '#f28f16',
    boxShadow: 'none',
     color: '#ffffff',
 

   '&.MuiButton-contained': {
    

    '&:hover': {

    
     backgroundColor: '#FECF51',
     color: '#ffffff',
     boxShadow: 'none',
    },
   },
  },
  
     
        fixedHeightPaperEmail: {
        
          boxShadow: 'none',
          padding: theme.spacing(4),
        },
  
  }));






export const AllOffersTable = () => {
  const classes = useStyles();
    let id:number =1
    const getID = () => {
        return id++;
    }
    return (
      <Grid container className={classes.root} spacing={2}>
      <Grid item lg={12} md={12} xs={12}>
          <Paper className={classes.fixedHeightPaperEmail}>
          
      <MaterialTable

     
   
      style={{boxShadow: 'none', backgroundColor: '#ffffff', borderBottomLeftRadius: 8, borderBottomRightRadius: 8,}}
        title="All Offers"
        columns={[
          { title: 'Offer Id', render: () => <div>{getID()}</div>},
          { title: ' Buyer Name', field: 'name' },
          { title: 'Product', field: 'product' },
          { title: 'Weight', field: 'weight', type: 'numeric' },
          { title: 'Order Value', field: 'value', type: 'numeric' },
        
          {title: 'Status', render: () =>
        <Grid item lg={2}>
            <Chip label="Processing" style={{backgroundColor: '#f28f16', color: '#ffffff',}} />
        </Grid>},
          { title: 'Actions', render: () => 
        <Grid item lg={2} style={{marginLeft: 20,}}>
            <Link href="/singleoffer" style={{textDecoration: 'none',}}>
                <Button variant="contained" size="small" className={classes.btnStyle}>View</Button>
                </Link>
        </Grid>
        },
        ]}
        data={[
          { name: 'BeeWell Honey Jar', product: 'Manuka', weight: '3500 Jars', value: '2500', birthCity: 63 },
          { name: 'Honey HI Box', product: 'Jarah', weight: '100 Jars', value: '3700', birthCity: 34 },
          { name: 'BeeWell Honey Jar', product: 'Manuka', weight: '3500 Jars', value: '10500', birthCity: 63 },
          { name: 'Honey HI Box', product: 'Jarah', weight: '100 Jars', value: '20,000', birthCity: 34 },
          { name: 'BeeWell Honey Jar', product: 'Manuka', weight: '3500 Jars', value: '50,000', birthCity: 63 },
      
          
        ]}

      
      
    
      />
     

      </Paper>
      </Grid>
      </Grid>
    )
  }