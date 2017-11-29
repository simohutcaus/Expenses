import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.js';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';



const store = configureStore();
store.dispatch(addExpense({ description: 'water bill', amount: '4500'}));
store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000}));
store.dispatch(addExpense({ description: 'rent', amount: '4500'}));

//setTimeout(() => {
//    store.dispatch(setTextFilter('rent'));
//}, 3000);

//console.log(store.getState());
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
