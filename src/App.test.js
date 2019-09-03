import React from 'react';
import App from './App';
import {mount} from 'enzyme';

it('render app', () => {

  // 1
  let headerDiv = document.createElement('div');
  headerDiv.id = 'header';
  let rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);
  document.body.appendChild(headerDiv);

  const rendered = mount(<App /> , {attachTo : document.body}); 
  // 1

  // 2
  // tried this also 

  // document.body.innerHTML = '<div id="root"><div id="header"></div></div>';
  // const rendered = mount(<App />, {attachTo : document.querySelector('#root')});

  // 2 ENDS

  // random line which never executes , code is breaking in mount only
  expect(rendered.find('.div_div')).text.toBe('dd');

});
