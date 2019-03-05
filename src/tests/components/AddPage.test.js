import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseAddPage } from '../../components/AddPage';
import expenses from '../fixtures/expenses';

let onSubmitSpy, historySpy, wrapper;

beforeEach(() => {
    onSubmitSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<ExpenseAddPage onSubmit={onSubmitSpy} history={historySpy} />);    
});

test('should render add expense page correctly', () => {
    // beforeEach gets called
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    // beforeEach gets called
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
});