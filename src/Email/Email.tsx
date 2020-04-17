import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { DeleteForever, Send, Drafts } from '@material-ui/icons';
import { fade } from '@material-ui/core/styles'
import logo from './assets/logo.png';
import 'typeface-roboto';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
 



  container: {
    // paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  
    

   
  
  },



  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },


  fixedHeight: {
    height: 280,
    boxShadow: 'none',
  },


  composerButton: {

    backgroundColor: '#f28f16',
    color: '#ffffff',
    boxShadow: 'none',
    marginTop: '1%',

  },

  iconStyle: {
      width: 15,
      height: 15,
  },



}));


function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }

export const Email = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const breadClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };
  


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  
  return (
    <div className={classes.root}>
      <CssBaseline />
     
  

        
    
        {/* <Container maxWidth="lg" className={classes.container}> */}
        
        
           
          
            <Grid item xs={12} md={12} lg={12}>
            
              <Button variant="contained" color="secondary" fullWidth={true} className={classes.composerButton}>
                    compose
                    </Button>
                    <br />


                    <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon style={{fontSize: 16}} />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Drafts style={{fontSize: 16}} />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Send style={{fontSize: 16}} />
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DeleteForever style={{fontSize: 16}} />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>


      </List>
    

        
            </Grid>
           
         
     
         
        {/* </Container> */}
    
    </div>
  );
}