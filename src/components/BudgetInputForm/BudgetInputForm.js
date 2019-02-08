import React, {Component} from 'react'; 
import BudgetEntry from '../BudgetEntry/BudgetEntry';
import Grid from '@material-ui/core/Grid';
import { Typography, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
// import NavigationIcon from '@material-ui/icons/Navigation';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

class BudgetInputForm extends Component {

    state = {
        description:"",
        amount:0.0,
        add_item:false,
    }

    onDescriptionChange = (event) => {        
        this.setState({description:event.target.value});
    }

    onAmountChange = (event) => {
        this.setState({amount:event.target.value});
    }

    validateAmount = (amount) => {        
        if (amount > 0){
            return amount; 
        }
        return null; 
    }

    validateDescription = (description) => {
        if (description.length > 0){
            return description; 
        }
        return null; 
    }

    onAddEntry = () => {
        if (this.state.add_item){
            const description = this.validateDescription(this.state.description);
            const amount = this.validateAmount(this.state.amount); 
            if ((description != null) && (amount != null)){
                this.props.onAddEntry(
                    {description:this.state.description, 
                    amount: this.state.amount,
                    });
            }      
        }
        this.setState((prevstate)=>{
            return {add_item : true};
        });
    }

    onAddEntryCancel = () => {
        this.setState((prevstate)=>{
            return {add_item : false};
        });        
    }
    onRemoveEntry = (entry_id)=>{        
        this.props.onRemoveEntry(entry_id);
    }
    
    render(){
        let entry_components = null; 
        let cancel_button = null; 
        const {classes} = this.props; 

        if (this.state.add_item){
            entry_components =   
            (<Grid item>
                <div>
                <TextField
                    label="Description"                       
                    onChange={this.onDescriptionChange}
                    margin="normal"
                    variant="outlined"/>
                <TextField
                    label="Amount"                       
                    onChange={this.onAmountChange}
                    margin="normal"
                    variant="outlined"/>                            
                    {/* <input onChange={this.onDescriptionChange} placeholder="Description"/>  <input onChange={this.onAmountChange} placeholder="0.00"/> */}
                </div>
            </Grid>);

            cancel_button = (<Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="Add"
                className={classes.margin}
                onClick={this.onAddEntryCancel}>                
                Cancel
            </Fab> );
        }        

        let entries = null;         
        if (this.props.entries){
            entries = []; 
            for (let entry_id in this.props.entries){
                entries.push(  
                    <Grid item key={entry_id}>
                    <BudgetEntry
                    
                    entryId={entry_id}
                    description={this.props.entries[entry_id].description}
                    amount={this.props.entries[entry_id].amount} 
                    onClickRemove={()=>{this.onRemoveEntry(entry_id)}}/>
                    </Grid>)
            }    
        }
        
        return (
           <div style={{ maxWidth:500,
                         margin:'auto'}}>
            <Grid style={{}}
                container direction="column"
                alignContent="center"
                alignItems="center">
                    <Grid style={{}}
                        item md={12} xs={12} lg={12}>
                        <Typography align="center" variant="headline" color="textPrimary">
                            {this.props.title}
                        </Typography>
                            
                    </Grid>
                    {entry_components}
                    <Grid item >                    
                        <Fab
                            variant="extended"
                            size="medium"                            
                            aria-label="Add"
                            className={classes.margin}
                            onClick={this.onAddEntry}>
                            {this.state.add_item? null:<AddIcon className={classes.extendedIcon} />}
                            {this.state.add_item? "Save":"Add"}
                        </Fab>  
                        {cancel_button}                      
                    </Grid>                    
                    <Grid container direction="column" spacing={0}> 
                        {entries}
                    </Grid>

            </Grid>               
           </div>
    
        ); 
    }

}

export default withStyles(styles)(BudgetInputForm)  ; 