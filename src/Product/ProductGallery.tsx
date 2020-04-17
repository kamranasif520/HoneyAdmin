import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, Select, FormControl, Button, Paper, Grid, Card, CardMedia, CardActionArea} from '@material-ui/core';
import honey from './../assets/honey.jpg';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';




const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
    },

    formControl: {
        margin: theme.spacing(0),
        minWidth: '100%',
        
      },

      saveButton: {

        backgroundColor: '#f28f16',
        color: '#ffffff',
        boxShadow: 'none',
        marginTop: '1%',
    
      },

      honeyImg: {
          overflowX: 'hidden',
          width: 326,
          
          borderRadius: 5,

      },

      media: {
          height: 350,
      },

      cardroot: {
          maxWidth: 364,
         
          boxShadow: 'none',
      },

}));



function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export const ProductGallery = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    return(


        <div className={classes.root}>
            <Grid item xs={12}>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
        <Select
          native
         
          label="Category"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="NA" value="" />
          <option value={10}>Manuka</option>
          <option value={20}>Organic</option>
          <option value={30}>Non-Organic</option>
        </Select>
        <br />

       

        
        <br />
       
      </FormControl>
            </Grid>

            <Grid item xs={12} lg={12}>
            <Card className={classes.cardroot}>
            <img src={honey} alt="honey image" className={classes.media} />
            <Button variant="contained" color="secondary" className={classes.saveButton} onClick={handleClick} fullWidth={true}>
                    Save
                    </Button>
                    <Snackbar open={open} autoHideDuration={6000}  onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Saved
        </Alert>
      </Snackbar>
      
    </Card>
          
           
            </Grid>
            
            
    
     
  

      </div>
    

    )
}