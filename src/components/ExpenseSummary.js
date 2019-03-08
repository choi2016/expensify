import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    const formatedCount = numeral(expenseCount).format("0,0");
    return (
        <div>
            <h3>Viewing {formatedCount} {expenseWord} totalling {formatedExpensesTotal}</h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpenseTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);