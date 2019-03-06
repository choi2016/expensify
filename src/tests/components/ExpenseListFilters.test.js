import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/fixtures';
import moment from 'moment';

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByDate = jest.fn(); 
    sortByAmount = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
        />
    );
});

test('should render ExpenseListFilters component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters component correctly with alt data', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    // wrapper.find('input').prop('onChange')(text);
    const value = "water";
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = "date";
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = "amount";
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
    const startDate = moment(0).subtract(1, 'years');
    const endDate = moment(0).add(1, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
    const calenderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
});