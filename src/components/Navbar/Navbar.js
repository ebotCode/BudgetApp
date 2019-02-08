import React from 'react'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import GithubIcon from '../CustomIcons/GithubIcon';


const styles = theme => ({
    appBar:{
        position: 'relative',
        background:  'linear-gradient(to right,rgba(249,107,142,1),rgba(218,103,230,1),rgba(130,125,253,1))'
        
    },
    grow: {
        flexGrow: 1,
      },    
});


// 'linear-gradient(to right bottom, #430089, #82ffa1)'
const navbar = (props) => {
    const {classes} = props; 
    
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                            Simple Budget
            </Typography> 

            <Tooltip title="view source code" aria-label="view source code">
            <IconButton
                    href="https://github.com/ebotCode/BudgetApp"
                  aria-owns={true ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  color="inherit">
                  <GithubIcon />
                </IconButton>                
            </Tooltip>                    
                
            </Toolbar>
        </AppBar>
    ); 
}


export default withStyles(styles)(navbar); 