import moment from 'moment';
import { setTextFilter, 
         sortByDate, 
         sortByAmount, 
         setStartDate, 
         setEndDate
       } from '../../actions/filters';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should generate set text filter action object with text value', () => {
    const action = setTextFilter('text');
    const text = "text"
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Should generate set text filter action object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: "SORT_BY_DATE"
    });
});

test('should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});