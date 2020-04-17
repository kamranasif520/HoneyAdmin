import React from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import { mainListItems, secondaryListItems } from './Components/SidebarLinks';
import { SidebarLinks } from './Components/SidebarLinks';
import InputBase from '@material-ui/core/InputBase';
import { Search, AccountCircle } from '@material-ui/icons';
import { fade } from '@material-ui/core/styles'
import logo from './assets/logo.png';
import 'typeface-roboto';
import men from './assets/men.png';
import black from './assets/black.jpg';
import Image from 'material-ui-image';
import background from './assets/background.jpg';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import { Email } from './Email/Email';
import { EmailEditor } from './Email/EmailEditor';
import { Inbox } from './Email/Inbox';
import { AddProduct } from './Product/AddProduct';
import { ProductGallery } from './Product/ProductGallery';
import { SingleOfferLeft } from './Offer/SingleOfferLeft';
import { SingleOfferRight} from './Offer/SingleOfferRight';
import { SingleOfferBottom } from './Offer/SingleOfferBottom';
import { OrderShipping } from './Orders/OrderShipping';
import { OrderGeneral } from './Orders/OrderGeneral';
import { Menus } from './Components/Menus';
import { OrderItemDetails } from './Orders/OrderItemDetails';
import { OrderDetailsShip } from './Orders/OrderDetailsShip';
import { AllProductsTable } from './Product/AllProductsTable';
import { AllOrdersTable } from './Orders/AllOrdersTable';
import { AllCategoriesTable } from './Categories/AllCategoriesTable';
import { NewCategory } from './Categories/NewCategory';
import { EmailLayout } from './Email/EmailLayout';
import { ProductLayout } from './Product/ProductLayout';
import { OrderLayout } from './Orders/OrderLayout';
import { OfferLayout } from './Offer/OfferLayout';
import { AllOffersTable } from './Offer/AllOffersTable';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '20 8px 50px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    backgroundColor: '#F28F16',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    borderRight: 'none',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },



  container: {
    // paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  
     marginTop: '-15%',
     overflow: 'auto',


    [theme.breakpoints.down('sm')]: {
       marginTop: '-45%',
     },

  
    

   
  
  },
  paper: {
    padding: theme.spacing(4),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 580,
    boxShadow: 'none',
  },

  fixedHeightPaperProduct: {
    height: 650,
    boxShadow: 'none',
    padding: theme.spacing(4),

    [theme.breakpoints.down('sm')]: {

    
      height: 2200,
    },
    
  },

  fixedHeightPaperProductGallery: {
    height: 600,
    boxShadow: 'none',
    padding: theme.spacing(4),
    
  },

  fixedHeightPaperOffer: {
    height: 520,
    boxShadow: 'none',
    padding: theme.spacing(4),
    
  },

  fixedHeightPaperProductItemDetail: {
    height: 1000,
    boxShadow: 'none',
    padding: theme.spacing(4),
  },

  
  fixedHeightPaperProductsTable: {
    height: 700,
    boxShadow: 'none',
    padding: theme.spacing(4),
  },


   
  fixedHeightPaperNewCategory: {
    height: 300,
    boxShadow: 'none',
    padding: theme.spacing(4),
  },

  search: {
    position: 'relative',
    marginRight: '2%',
    // borderRadius: theme.shape.borderRadius,
    borderRadius: 20,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },


  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '14ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

  menuTab: {
    marginTop: 40,
  },

  breadcrumbs: {
    color: '#ffffff',
    position: 'relative',

    '& .MuiBreadcrumbs-separator': {
      color: '#ffffff',
    },
    
  },
  link: {
    display: 'flex',
    color: '#ffffff',
    position: 'relative',
    fontSize: 12,
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 10,
    height: 10,
    color: '#ffffff',
    position: 'relative',
  },

  topGrid: {
    overflow: 'hidden',
    
    
  },

  backgroundImg: {
    overflow: 'hidden',
    maxHeight: 250,
    minWidth: '100%',
  },







}));

export const Dashboard = () => {
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
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <div>
         
      <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img src={men} alt="user-image" height="30" width="30" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menuTab}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>

          

         
        


        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <img src={logo} alt="logo image" />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List><Menus /></List>
        <Divider />
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>



         
            


      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid item xs={12} md={12} lg={12} className={classes.topGrid}>
          <Paper>
              <img src={black} alt="background" className={classes.backgroundImg} />
              </Paper>
            </Grid>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
           
            <Grid item xs={12} md={12} lg={12}>
              <Typography variant="h5" className={classes.breadcrumbs}>Dashboard</Typography>
              <br />
              <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}> 
                <Link color="inherit" href="/" onClick={breadClick} className={classes.link}>
                  <HomeIcon className={classes.icon} />
                  Dashboard
                </Link>
                <Link
                  color="inherit"
                  href="/getting-started/installation/"
                  onClick={breadClick}
                  className={classes.link}
                >
                  <WhatshotIcon className={classes.icon} />
               
                  Products
             
                </Link>
                <Typography color="textPrimary" className={classes.link}>
                  <GrainIcon className={classes.icon} />
                  Add Product
                </Typography>
              </Breadcrumbs>
            </Grid>
{/* 
            <Router>
           
           <Switch>

          

                <Grid item lg={12} md={12} xs={12}>
                <Paper className={classes.fixedHeightPaperProductsTable}>
              <Route path="/categories" exact component={AllCategoriesTable} />
              </Paper>
              </Grid>



             
          
              </Switch>
           
         
            </Router> */}


              <Router>
                <Switch>
            <Grid lg={12} md={12} xs={12}>
              <Route path="/email" component={EmailLayout} />
              <Route path="/categories" component={AllCategoriesTable} />
              <Route path="/products" component={AllProductsTable} />
              <Route path="/orders" component={AllOrdersTable} />
              <Route path="/addproduct" component={ProductLayout} />
              <Route path="/singleorder" component={OrderLayout} />
              <Route path="/singleoffer" component={OfferLayout} />
              <Route path="/offers" component={AllOffersTable} />
        
          
            </Grid>


            </Switch>
            </Router>
         


            {/* Main Body After Breadcrumbs */}

            {/* <Grid item lg={8} md={8} xs={12}>
              <Paper className={classes.fixedHeightPaperProduct}>
                <OrderShipping />
              </Paper>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <Paper className={classes.fixedHeightPaperProduct}>
                <OrderGeneral />
              </Paper>
            </Grid>

            <Grid item lg={5} md={5} xs={12}>
              <Paper className={classes.fixedHeightPaperProductItemDetail}>
               <OrderItemDetails />
              </Paper>
            </Grid>
            <Grid item lg={7} md={7} xs={12}>
              <Paper className={classes.fixedHeightPaperProductItemDetail}>
               <OrderDetailsShip />
              </Paper>
            </Grid> */}
{/* 
            <Grid item lg={12} md={12} xs={12}>
              <Paper className={classes.fixedHeightPaperProductsTable}>
              <AllProductsTable />
              </Paper>
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
              <Paper className={classes.fixedHeightPaperProductsTable}>
              <AllOrdersTable />
              </Paper>
            </Grid> */}

            {/* <Grid item lg={12} md={12} xs={12}>
              <Paper className={classes.fixedHeightPaperNewCategory}>
              <NewCategory />
              </Paper>
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
              <Paper className={classes.fixedHeightPaperProductsTable}>
              <AllCategoriesTable />
              </Paper>
            </Grid> */}

           

            

          

          
          </Grid>

       
              
        
         
        
          <Box pt={4}>
        
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}