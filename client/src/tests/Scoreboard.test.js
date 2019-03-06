import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Scoreboard from '../components/Scoreboard';

Enzyme.configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scoreboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays list of players', () => {
  const wrapper = shallow(<Scoreboard />);
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find('ul').exists()).toBe(true);
})
