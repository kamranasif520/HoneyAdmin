import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MenuList, MenuItem } from '@material-ui/core';
import { Dashboard, ShoppingCart, Message, BarChart, Layers, Email, Category, Lock } from '@material-ui/icons';
import 'typeface-roboto';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({


iconStyle: {

  color: '#6b6a68',


  '& .MuiListItemIcon-root': {
    minWidth: 45,

    [theme.breakpoints.up('sm')]: {
      marginLeft: 10,
    },

    
  },


},

  fontStyle: {

    fontSize: 10,
  },

}));





export const SidebarLinks = () => {
  const classes = useStyles();
  return(


      <div className={classes.iconStyle}>
      
    <ListItem button>
      <ListItemIcon>
        <Dashboard style={{fontSize: 17}}  />
      </ListItemIcon>
      <ListItemText className={classes.fontStyle} primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Layers style={{fontSize: 17}} />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCart style={{fontSize: 17}} />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Category style={{fontSize: 17}} />
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChart style={{fontSize: 17}} />
      </ListItemIcon>
      <ListItemText primary="Offers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Message style={{fontSize: 17}} />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Email style={{fontSize: 17}} />
      </ListItemIcon>
      <ListItemText primary="Email" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Lock style={{fontSize: 17}} />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
    </div>

  );
}



export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader> */}
   
    <ListItem button>
      <ListItemIcon>
        <Message />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Email />
      </ListItemIcon>
      <ListItemText primary="Email" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Lock />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);