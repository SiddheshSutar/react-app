import React from 'react';
import App from './App';
import {mount} from 'enzyme';

it('render app', () => {

  let headerDiv = document.createElement('div');
  headerDiv.id = 'header';
  let rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  // let documentMock = document.createElement('div');
  document.body.appendChild(rootDiv);
  document.body.appendChild(headerDiv);

  const rendered = mount(<App /> , {attachTo : document.body}); 
  expect(rendered.find('.div_div')).text.toBe('dd');

});
