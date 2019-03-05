import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Button from '../components/Button';

Enzyme.configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has Click me as initial text', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find('button').exists()).toBe(true);
  expect(wrapper.find('button').html()).toBe('<button>Click me</button>')
})

it('changes text after being clicked', () => {
    const wrapper = shallow(<Button />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').html()).toBe('<button>Click me not</button>')
})

it('changes to the appropriate message depending on number of clicks', () => {
    const wrapper = shallow(<Button />)
    for (let i = 0; i < 15; i++){
        wrapper.find('button').simulate('click')
    }
    expect(wrapper.find('button').html()).toBe('<button>Click me not</button>')
})