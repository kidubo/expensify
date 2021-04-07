 import moment from 'moment';

// Get visible expenses
 const getVisibleExpenses = ( expenses, {text, sortBy, startDate, endDate } = {}) => {

    return expenses.filter((expense) => {
        const createdAtmoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtmoment, 'day') : true;
        const endDateMatch = startDate ? startDate.isSameOrAfter(createdAtmoment, 'day') : true;;
        const textMatch = expense.description.toString().toLowerCase().includes(text.toString().toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1:-1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1;
        }
        
     })
}; 

export default getVisibleExpenses;


