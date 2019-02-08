import React from 'react'; 
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
        </div>
    ); 
}

export default withStyles(styles)(entry); 