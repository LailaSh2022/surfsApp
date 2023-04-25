import React from 'react';
//import { shallow } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import SignUp from '../screens/SignUp';

describe('Sign Up Page', () => {
  const wrapper = shallow(<SignUp />);

  it('renders the Sign Up page', () => {
    expect(wrapper.find('View')).toHaveLength(1);
    expect(wrapper.find('Text').at(0).prop('children')).toEqual('Sign Up');
    expect(wrapper.find('TextInput')).toHaveLength(3);
    expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
  });

  it('displays an error message when form is submitted with empty fields', () => {
    wrapper.find('TouchableOpacity').simulate('press');
    expect(wrapper.find('Text').at(3).prop('children')).toEqual('Please fill in all fields');
  });

  it('displays an error message when an invalid email is entered', () => {
    wrapper.find('TextInput').at(0).simulate('changeText', 'invalid-email');
    wrapper.find('TouchableOpacity').simulate('press');
    expect(wrapper.find('Text').at(3).prop('children')).toEqual('Please enter a valid email');
  });

  it('displays an error message when an invalid password is entered', () => {
    wrapper.find('TextInput').at(1).simulate('changeText', 'short');
    wrapper.find('TouchableOpacity').simulate('press');
    expect(wrapper.find('Text').at(3).prop('children')).toEqual('Password must be at least 6 characters long');
  });

  it('displays an error message when the passwords do not match', () => {
    wrapper.find('TextInput').at(1).simulate('changeText', 'password');
    wrapper.find('TextInput').at(2).simulate('changeText', 'different-password');
    wrapper.find('TouchableOpacity').simulate('press');
    expect(wrapper.find('Text').at(3).prop('children')).toEqual('Passwords do not match');
  });

  it('navigates to the home page when valid credentials are entered', () => {
    const navigateAction = NavigationActions.navigate({ routeName: 'Home' });
    const navigationMock = {
      dispatch: jest.fn(),
    };
    const wrapper = shallow(<SignUp navigation={navigationMock} />);
    wrapper.setState({ email: 'test@example.com', password: 'password', confirmPassword: 'password' });
    wrapper.find('TouchableOpacity').simulate('press');
    expect(navigationMock.dispatch).toHaveBeenCalledWith(navigateAction);
  });
});
