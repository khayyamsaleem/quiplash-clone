import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import App from '../App';

Enzyme.configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows an h1 with our welcome message', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find('h1').exists()).toBe(true);
  expect(wrapper.find('h1').html()).toBe('<h1>Welcome to Quip Thinking!</h1>')
})