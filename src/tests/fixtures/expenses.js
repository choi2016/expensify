import moment from 'moment';

export default [{
    id: '1',
    description: 'GUM',
    note: '',
    amount: 24,
    createdAt: 0
}, {
    id: '2',
    description: 'GUM2e',
    note: '',
    amount: 242,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'GUM3ee',
    note: '',
    amount: 2400,
    createdAt: moment(0).add(4, 'days').valueOf()
}];