import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '@material-ui/core/Button';
import { Send, Delete } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import 'typeface-roboto';





const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    display: 'flex',
  },
 



  container: {
    // paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  
    

   
  
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

  textArea: {

    borderTop: 0,
  },



  paper: {
    display: 'flex',
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
    backgroundColor: '#fbfbfb',

  },

  divider: {
    alignSelf: 'stretch',
    height: 'auto',
    margin: theme.spacing(1, 0.5),
  },

  iconStyle: {
      width: 15,
      height: 15,
  },

  sendbutton: {
    margin: theme.spacing(0),
    backgroundColor: '#f28f16',
    boxShadow: 'none',
    height: 45,
    marginRight: 10,



  },

  deletebutton: {
    
    backgroundColor: '#EF5552',
    boxShadow: 'none',
    borderRadius: 4,
    height: 45,
    color: '#ffffff',
    

    '&: hover': {

        backgroundColor: '#c44240',
        boxShadow: 'none',
        borderRadius: 4,
        height: 45,
        color: '#ffffff',

    }
  },

  textfield: {
    '& > *': {
      margin: theme.spacing(0),
      border: '1px solid #ffffff',
    
     
    },

},






}),
);



const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
      margin: theme.spacing(0.5),
      border: 'none',
      padding: theme.spacing(0, 1),
      '&:not(:first-child)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-child': {
        borderRadius: theme.shape.borderRadius,
      },
    },
  
  }))(ToggleButtonGroup);
  
  
  
  




export const EmailEditor = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
 

  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  
  return (
    <div className={classes.root}>
      <CssBaseline />
     
  

        
    
        {/* <Container maxWidth="lg" className={classes.container}> */}
        
        
           
          
            <Grid item xs={12} md={12} lg={12}>
            
            <form  noValidate autoComplete="off">
<br />
  <TextField id="outlined-basic" label="To" variant="outlined"  size="small" fullWidth className={classes.textfield} />
  <br /><br />
  <TextField id="outlined-basic" label="Subject" variant="outlined" size="small" fullWidth className={classes.textfield} />
</form>
<br /> <br />


<div>
      <Paper elevation={0} className={classes.paper}>
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider orientation="vertical" className={classes.divider} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>

    <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows="10"
          fullWidth
          defaultValue="Hello Summer note
          Select a text to reveal the toolbar.
          Edit rich document on-the-fly, so elastic!
          End of air-mode area"
          variant="outlined"
          className={classes.textArea}
        />

        <br /><br />



        <Button
        variant="contained"
        color="primary"
        className={classes.sendbutton}
        startIcon={<Send />}
      >
        Send
      </Button>

      <IconButton color="primary" aria-label="upload picture" component="span" className={classes.deletebutton}>
          <Delete />
        </IconButton>
    

        
            </Grid>
           
         
     
         
        {/* </Container> */}
    
    </div>
  );
}