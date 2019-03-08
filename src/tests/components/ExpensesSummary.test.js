import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpenseSummary';

test('should render ExpensesSummary corectly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={55}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary corectly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={24} expensesTotal={55}/>)
    expect(wrapper).toMatchSnapshot();
});