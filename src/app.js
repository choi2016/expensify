import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is my dashboard component.
    </div>
); 

const ExpenseAddPage = () => (
    <div>
        This is my add component.
    </div>
); 

const ExpenseEditPage = () => (
    <div>
        This is my edit component.
    </div>
); 

const ExpenseHelpPage = () => (
    <div>
        This is my help component.
    </div>
); 

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={ExpenseAddPage}/>
            <Route path="/edit" component={ExpenseEditPage}/>
            <Route path="/help" component={ExpenseHelpPage}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));