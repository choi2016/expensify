import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseEditPage } from '../../components/EditPage';

let editExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(
        <ExpenseEditPage 
            editExpense={editExpenseSpy} 
            startRemoveExpense={startRemoveExpenseSpy} 
            history={historySpy}
            expense={expenses[2]}
        />
    );
});

test('should render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpense correctly', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');    
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});