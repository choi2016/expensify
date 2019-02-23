import React from 'react';

const ExpenseEditPage = (props) => {
    console.log(props);
    return (
        <div>
            Editing item number {props.match.params.id}.
        </div>
    );
}; 

export default ExpenseEditPage;