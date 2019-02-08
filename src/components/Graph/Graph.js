import React from 'react'; 
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});


const graph = (props) => {
    const {classes}  = props; 
    return (
        <div style={{}}>
        <Grid style={{}} container>
            <Grid item>
            {/* <CircularProgress
                style={{width:100}}
                className={classes.progress}
                variant="static"
                size={40}
                value={50}
                >
                Good
                </CircularProgress>             */}
            </Grid>

        </Grid>

        </div>
    ); 
}

export default withStyles(styles)(graph); 