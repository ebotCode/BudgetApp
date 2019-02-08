import React from 'react'; 
import BudgetInputForm from '../BudgetInputForm/BudgetInputForm'
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const styles = theme => ({
    heroContent:{

        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    layout: {
        background: 'white',
        borderRadius:20,
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        //   width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },    

});


const controls = (props) => {
    const {classes} = props; 

    return (
    <Paper className={classes.layout}>     
        <Grid style={{}} container spacing={40} 
                    direction="row"
                    alignItems="center">
            <Grid style={{}} item xs={12} sm={12} md={6} lg={6}  >
                <BudgetInputForm title="Money In" 
                entries={props.incomeEntries} 
                onAddEntry={props.onAddIncomeEntry}
                onRemoveEntry={props.onRemoveIncomeEntry}/>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>

            <BudgetInputForm title="Money Out" 
            entries={props.expenseEntries} 
            onAddEntry={props.onAddExpenseEntry}
            onRemoveEntry={props.onRemoveExpenseEntry}/> 

            </Grid>
        </Grid>   

    </Paper>
    );
}

export default withStyles(styles)(controls); 