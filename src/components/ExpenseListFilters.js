import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount ,sortByDate, setStartDate, setEndDate }  from '../actions/filters';


class ExpenseListFilters extends React.Component {
    state = {
         calendarFocused: null,
        //  startDate: moment().startOf('month'),
        //  endDate: moment().endOf('month')

        };

        onDatesChange = ({ startDate, endDate })=>{
            this.props.dispatch(setStartDate(startDate))
            this.props.dispatch(setEndDate(endDate))
        }

        onFocusChange = (calendarFocused)=>{
                this.setState(()=> ({ calendarFocused }));
        }
    
    render(){
        return(
                <div>
                   <input type = 'text' 
                          value= {this.props.filters.text} 
                          onChange = {(e)=> {
                                this.props.dispatch(setTextFilter(e.target.value))
                          } }
                    />
                    <select 
                        value = {this.props.filters.sortBy}
                        onChange = {(e)=>{
                            if(e.target.valuey === "date"){
                                this.props.dispatch(sortByDate())
                            }else if(e.target.value === "amount"){
                                this.props.dispatch(sortByAmount())
                            }
                        }}
                    >
                        <option value = "date">Date</option>
                        <option value = "amount">Amount</option>
                    </select>

                    <DateRangePicker

                        startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                        endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                        onDatesChange={ this.onDatesChange }         // {({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={this.onFocusChange}  // {calendarFocused => this.setState({ calendarFocused })} // PropTypes.func.isRequired,
                        showClearDates={true}
                        numberOfMonths= {1}
                        isOutsideRange = {() => false }

                    />

                </div>
            )
    }
}


const mapStateToProps = (state) => {
      return{
          filters: state.filters
      };
};

export default connect(mapStateToProps)(ExpenseListFilters);

// the goal from here is to actual get the old value off from the store 