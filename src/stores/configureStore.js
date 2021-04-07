// Store creation
import { combineReducers, createStore } from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters'

const configureStore = () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

export default configureStore;


 


