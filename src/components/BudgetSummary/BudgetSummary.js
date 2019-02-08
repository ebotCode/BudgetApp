import React from 'react'; 
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'; 
import {withStyles} from '@material-ui/core/styles';


const styles = (theme) => ({
    content:{
        marginLeft:'auto',
        marginRight:'auto',
        maxWidth:500,
        marginTop:50,
        marginBottom:50
    }
});

const summary = (props) => {
    const {classes} = props; 
    return (
    <div  >
        <Grid container 
                className={classes.content}
                alignItems="center"
                alignContent="center">
                <Grid item md={4} xs={4}  >
                    <Typography align="center" component="h2" variant="h6" color="textPrimary">
                    INCOME
                    </Typography>
                    <Typography align="center" variant="h6" color="textSecondary">
                    ${props.totalIncome}
                    </Typography>                                              
                </Grid> 
                <Grid item md={4} xs={4}>
                    <Typography align="center" component="h2" variant="h6" color="textPrimary">
                    EXPENSE
                    </Typography>
                    <Typography align="center" variant="h6" color="textSecondary">
                    ${props.totalExpense}
                    </Typography> 
                </Grid>
                <Grid item md={4} xs={4}>
                    <Typography align="center"  component="h2" variant="h6" color="textPrimary">
                    BALANCE
                    </Typography>
                    <Typography align="center"  variant="h6" color="textSecondary">
                    ${props.totalIncome - props.totalExpense}
                    </Typography> 
                </Grid>                    
        </Grid>
        {/* <br/>
        <p>Summary:</p>
        <ul>
            <li>Total Income: ${props.totalIncome} </li>
            <li>Total Expense: ${props.totalExpense}</li>
        </ul> */}
    </div>     
    );
}

export default withStyles(styles)(summary); 
