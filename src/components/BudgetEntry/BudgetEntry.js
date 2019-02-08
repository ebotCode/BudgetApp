import React from 'react'; 
import Paper from '@material-ui/core/Paper'; 
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit,
    },
  });


// 
const entry = (props) => {
    const {classes} = props; 
    return (
        <div style={{margin:5}}>   
             <Chip
                style={{}}
                label={props.description + "  $" + props.amount}
                className={classes.chip}
                onDelete={props.onClickRemove}
                />  
                {/* color="primary"      */}
            {/* <Paper style={{margin:5}} elevation={1}>
                <Grid container 
                    alignItems="center"
                    alignContent="center"
                    spacing={8} justify="center">
                <Grid item md={8} lg={8} >
                    <Typography variant="h5" component="h3">
                        {props.description}
                    </Typography>   
                </Grid>
                <Grid item md={2} lg={2}>
                    <Typography variant="h5" component="h3">
                    ${props.amount}
                    </Typography> 
                </Grid>
                <Grid item md={2} lg={2}> 
                    <Button>x</Button>
                </Grid>               
                </Grid>

            </Paper>    */}
            {/* <p><input readOnly value={props.description}/> 
                <input style={{width:'auto'}} readOnly value={props.amount}  />        
                <button onClick={props.onClickRemove}>x</button> </p> */}
        </div>
    ); 
}

export default withStyles(styles)(entry); 