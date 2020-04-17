import React from 'react';
import MaterialTable from 'material-table';
import { Grid, Button, Paper, Link } from '@material-ui/core';
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

export const AllProductsTable = () => {
  const classes = useStyles();
    let id:number =1
    const getID = () => {
        return id++;
    }
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item lg={4} md={4} xs={12}>
        <Paper className={classes.fixedHeightPaperEmail}>
          <Link href="/addproduct" style={{textDecoration: 'none'}}>
        <Button variant="contained" color="secondary" fullWidth={true} className={classes.btnStyle}>
        
                    Add Product
                    </Button>
                    </Link>
</Paper>
        </Grid>
      <Grid item lg={12} md={12} xs={12}>
          <Paper className={classes.fixedHeightPaperEmail}>
          
         
      <MaterialTable

     
   
      style={{boxShadow: 'none', backgroundColor: '#ffffff', borderBottomLeftRadius: 8, borderBottomRightRadius: 8,}}
        title="All Products"
        
      
        columns={[
          { title: 'Product Id', render: () => <div>{getID()}</div>},
          { title: 'Product', render: rowData => (
              <Grid item lg={2}>
                  <img src={honey} style={{height: 35, width: 35,}} />
              </Grid>
          )},
          { title: 'Name', field: 'name' },
          { title: 'Category', field: 'category' },
          { title: 'Min Qty', field: 'quantity', type: 'numeric' },
          {
            title: 'Price Range(kg)',
            field: 'birthCity',
            type: 'numeric',
            lookup: { 34: '$14-20', 63: '$15-25' },
          },
          { title: 'Actions', render: () => 
        <Grid item lg={2} style={{marginLeft: 20,}}>
          <Link href="/addproduct" style={{textDecoration: 'none'}}>
                <Button variant="contained" size="small" style={{backgroundColor: '#f28f16', boxShadow: 'none', color: '#ffffff',}}>View</Button>
                </Link>
        </Grid>
        },
        ]}
        data={[
          { name: 'BeeWell Honey Jar', category: 'Manuka', quantity: '3500 Jars', birthCity: 63 },
          { name: 'Honey HI Box', category: 'Jarah', quantity: '100 Ton', birthCity: 34 },
          { name: 'Honey HI Box', category: 'Jarah', quantity: '100 Ton', birthCity: 34 },
          { name: 'Honey HI Box', category: 'Jarah', quantity: '100 Ton', birthCity: 34 },
          { name: 'Honey HI Box', category: 'Jarah', quantity: '100 Ton', birthCity: 34 },
        ]}

      
      
    
      />
       </Paper>
      </Grid>
      </Grid>
    )
  }