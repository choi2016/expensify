import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: `123abc`
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense(`123abc`, { note: 'test note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'test note'
        }
    })
});

test('Should setup add expense action object', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1000,
        createdAt: 54321,
        note: 'This was last months rent.'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0 
        }
    });    
});