import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashBoardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (

<BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true} />
    <Route path="/create" component={AddExpensePage} exact={true}/>
    <Route path="/edit/:id" component={EditExpensePage}/>
    <Route path="/help" component={HelpPage} exact={true} />
    <Route component={NotFoundPage} />
    </Switch>
    </div>

</BrowserRouter>




);

export default AppRouter;