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
                <div className="content-container">
                   <div className="input-group">
                   <div className="input-group__item">                   
                        <input 
                        type = 'text' 
                        className="text_input"
                        placeholder="Search expenses"
                        value= {this.props.filters.text} 
                        onChange = {(e)=> {
                              this.props.dispatch(setTextFilter(e.target.value))
                        } }
                        />
                  </div>
                  <div className="input-group__item">                    
                       <select 
                        value = {this.props.filters.sortBy}
                        className="select"
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
                  </div>
                  <div className="input-group__item">                  
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
                  </div>
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