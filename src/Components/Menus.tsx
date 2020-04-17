import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import 'typeface-roboto';
import { Dashboard, Layers, ShoppingCart, Category, BarChart, Message, Email, Lock} from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },

 
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      // backgroundColor: theme.palette.primary.main,
      backgroundColor: '#f28f16',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,

        '& .Mui-selected': {
          backgroundColor: '#ffffff',
        },
      },
    },
  },

  
}))(MenuItem);

export const Menus = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
 


  return (
    <div>
     
        <br />
        <Link href="/" style={{textDecoration: 'none', color: '#4c4a4a',}}>
        <StyledMenuItem style={{paddingTop: 5, paddingBottom: 5,}}>
          <ListItemIcon style={{marginLeft: 5,}}>
            <Dashboard fontSize="small"  style={{fontSize: 17,}}/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </StyledMenuItem>
        </Link>


        <Link href="/products" style={{textDecoration: 'none', color: '#4c4a4a',}}>
        <StyledMenuItem style={{paddingTop: 5, paddingBottom: 5,}}>
          <ListItemIcon style={{marginLeft: 5,}}>
            <Layers fontSize="small" style={{fontSize: 17}} />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </StyledMenuItem>
        </Link>

        <Link href="/orders" style={{textDecoration: 'none', color: '#4c4a4a',}}>
        <StyledMenuItem style={{paddingTop: 5, paddingBottom: 5,}}>
          <ListItemIcon style={{marginLeft: 5,}}>
            <ShoppingCart fontSize="small" style={{fontSize: 17}} />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </StyledMenuItem>
        </Link>


        <Link href="/categories" style={{textDecoration: 'none', color: '#4c4a4a',}}>
        <StyledMenuItem style={{paddingTop: 5, paddingBottom: 5,}}>
          <ListItemIcon style={{marginLeft: 5,}}>
            <Category fontSize="small" style={{fontSize: 17}} />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </StyledMenuItem>
        </Link>


        
        <Link href="/offers" style={{textDecoration: 'none', color: '#4c4a4a',}}>
        <StyledMenuItem style={{paddingTop: 5, paddingBottom: 5,}}>
          <ListItemIcon style={{marginLeft: 5,}}>
            <BarChart fontSize="small" style={{fontSize: 17}} />
          </ListItemIcon>
          <ListItemText primary="Offers" />
        </StyledMenuItem>
        </Link>

        <Link href="#" style={{textDecoration: 'none', color: '#4c4a4a',}}>
        <StyledMenuItem style={{paddingTop: 5, paddingBottom: 5,}}>
          <ListItemIcon style={{marginLeft: 5,}}>
            <Message fontSize="small" style={{fontSize: 17}} />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </StyledMenuItem>
        </Link>

        

        <Link href="/email" style={{textDecoration: 'none', color: '#4c4a4a',}}>
        <StyledMenuItem style={{paddingTop: 5, paddingBottom: 5,}}>
          <ListItemIcon style={{marginLeft: 5,}}>
            <Email fontSize="small" style={{fontSize: 17}} />
          </ListItemIcon>
          <ListItemText primary="Email" />
        </StyledMenuItem>
        </Link>
        
        <Link href="#" style={{textDecoration: 'none', color: '#4c4a4a',}}>
        <StyledMenuItem style={{paddingTop: 5, paddingBottom: 5,}}>
          <ListItemIcon style={{marginLeft: 5,}}>
            <Lock fontSize="small" style={{fontSize: 17}} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
        </Link>
        
        
      

     
    </div>
  );
}