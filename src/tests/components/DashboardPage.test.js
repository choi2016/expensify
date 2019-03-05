import ExpenseDashboardPage from '../../components/DashboardPage';
import { shallow } from 'enzyme';
import React from 'react';

test('should render DashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});