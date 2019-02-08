import React , {Component} from 'react'; 
import BudgetSummary from '../BudgetSummary/BudgetSummary'
import BudgetControls from '../BudgetControls/BudgetControls';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Graph from '../Graph/Graph';

const styles = theme => ({
    layout:{
        margin: 5,
    }
    
});



class BudgetBuilder extends Component { 

    state = {
        total_income: 0, 
        total_expense: 0,
        last_income_id: 3,
        last_expense_id: 3,
        income_entries: {
                        'income0':{description:'Freelance web project',amount:2000},
                        'income1':{description:'Varsity Tutors',amount:50},
                        'income2':{description:'SEEK program',amount:20},
                        'income3':{description:'Research Position',amount:20},
        },
        expense_entries:{
            'expense0':{description:'tamuk fees',amount:20},
            'expense1':{description:'python course',amount:50},
            'expense2':{description:'NSBE conference',amount:20},
            'expense3':{description:'Chocolate snack pack',amount:20},            
        },
    }

    componentDidMount(){
        this.updateBudgetSummary();
    }
    

    updateBudgetSummary = () => {
        // summ total income and expense 
        let total_income = 0.0 ;
        for (let key in this.state.income_entries){
            const entry = this.state.income_entries[key];
            total_income = total_income + parseFloat(entry.amount); 
        }
        let total_expense = 0.0 ; 
        for (let key in this.state.expense_entries){
            const entry = this.state.expense_entries[key]; 
            total_expense = total_expense + parseFloat(entry.amount); 
        }

        this.setState({total_income:total_income,total_expense:total_expense});
    }

    addIncomeEntryHandler = (entry) => {
        // add to income entries 
        const new_entry_id = this.state.last_income_id + 1; 
        const new_income_entries = {
            ...this.state.income_entries,
            ['income'+new_entry_id]:{description:entry.description, amount:entry.amount},
        }
        this.setState((prevstate)=>{
            return {income_entries:new_income_entries,
                last_income_id:new_entry_id };
        }, this.updateBudgetSummary);        
    }

    addExpenseEntryHandler = (entry) => {
        // add to income entries 
        const new_entry_id = this.state.last_expense_id + 1; 
        const new_expense_entries = {
            ...this.state.expense_entries,
            ['expense'+new_entry_id]:{description:entry.description, amount:entry.amount},
        }
        this.setState((prevstate)=>{
            return {expense_entries:new_expense_entries,
                last_expense_id:new_entry_id };
        }, this.updateBudgetSummary);
    
    
    }

    removeIncomeEntryHandler = (entry_id) => {
        const new_income_entries = {};
        for (let key in this.state.income_entries){
            if (entry_id !== key){
                new_income_entries[key] = this.state.income_entries[key];
            }
        }
        this.setState({income_entries:new_income_entries},
                this.updateBudgetSummary);
    }

    removeExpenseEntryHandler = (entry_id) => {
        const new_expense_entries = {};
        for (let key in this.state.expense_entries){
            if (entry_id !== key){
                new_expense_entries[key] = this.state.expense_entries[key];
            }
        }
        this.setState({expense_entries:new_expense_entries},
                this.updateBudgetSummary);
    }

    render(){
        const {classes} = this.props; 
        return (
            <div className={classes.layout}>
                <Grid container direction="row">
                    <Grid style={{}} item sm={12} >
                            <Grid item >
                                <div>
                                <BudgetSummary 
                                totalIncome={this.state.total_income}
                                totalExpense={this.state.total_expense}/>
                                </div>                          
                            </Grid>
                            <Grid item md={12}>
                                <div style={{margin:20}}>
                                <BudgetControls incomeEntries={this.state.income_entries}
                                                expenseEntries={this.state.expense_entries}
                                                onAddIncomeEntry={this.addIncomeEntryHandler}
                                                onAddExpenseEntry={this.addExpenseEntryHandler}
                                                onRemoveIncomeEntry={this.removeIncomeEntryHandler}
                                                onRemoveExpenseEntry={this.removeExpenseEntryHandler}/>  
                                </div>                        
                            </Grid>                                    
                    </Grid> 
                {/* <Grid style={{background:"yellow"}} item md={4}>
                     <Graph/>
                </Grid> */}

                </Grid>
            </div>          
        ); 
    }
}


export default withStyles(styles)(BudgetBuilder) ;