import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseAddPage } from '../../components/AddPage';
import expenses from '../fixtures/expenses';
import { editExpense } from '../../actions/expenses';

let startAddExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    startAddExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<ExpenseAddPage startAddExpense={startAddExpenseSpy} history={historySpy} />);    
});

test('should render add expense page correctly', () => {
    // beforeEach gets called
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    // beforeEach gets called
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});