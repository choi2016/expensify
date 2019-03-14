import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseEditPage } from '../../components/EditPage';

let startEditExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    startEditExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(
        <ExpenseEditPage 
            startEditExpense={startEditExpenseSpy} 
            startRemoveExpense={startRemoveExpenseSpy} 
            history={historySpy}
            expense={expenses[2]}
        />
    );
});

test('should render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit Expense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpense correctly', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');    
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});