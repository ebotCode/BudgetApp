import React, {Component} from 'react'; 
import BudgetEntry from '../BudgetEntry/BudgetEntry';
import Grid from '@material-ui/core/Grid';
import { Typography, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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
    descriptionInputRef = null;
    amountInputRef = null;

    resetFields = () =>{
       if (this.descriptionInputRef !== null){
           this.descriptionInputRef.value="";
       }
       if (this.amountInputRef !== null){
           this.amountInputRef.value="";
       }
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
                // reset the description and amount field
                this.resetFields();
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
            entry_components = (<Grid style={{padding:5}} container direction="row" spacing={8} alignContent="center" alignItems="center">
            <Grid  style={{}} item xs={12} md={6}>
                <TextField   
                    inputRef ={(el) => {this.descriptionInputRef = el}  }
                    label="Description" 
                    fullWidth                      
                    onChange={this.onDescriptionChange}
                    margin="normal"
                    variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    inputRef={(el) => {this.amountInputRef = el}  }
                    fullWidth
                    label="Amount"                       
                    onChange={this.onAmountChange}
                    margin="normal"
                    variant="outlined"/>                            
                    {/* <input onChange={this.onDescriptionChange} placeholder="Description"/>  <input onChange={this.onAmountChange} placeholder="0.00"/> */}
            </Grid>            
        </Grid>); 

            cancel_button = (<Fab variant="extended" size="medium"
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
                        <BudgetEntry entryId={entry_id} 
                            description={this.props.entries[entry_id].description}
                            amount={this.props.entries[entry_id].amount} 
                            onClickRemove={()=>{this.onRemoveEntry(entry_id)}}/>
                    </Grid>)
            }    
        }
        
        return (
           <div style={{
                         maxWidth:500,
                         margin:'auto'}}>
            <Grid style={{}} container direction="column" alignContent="center" alignItems="center">
                    <Grid style={{}} item md={12} xs={12} lg={12}>
                        <Typography align="center" variant="headline" color="textPrimary">
                            {this.props.title}
                        </Typography>
                            
                    </Grid>

                    {entry_components}
                                       
                    <Grid item >                    
                        <Fab variant="extended"  size="medium" aria-label="Add" className={classes.margin}
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