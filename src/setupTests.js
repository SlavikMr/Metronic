/* eslint-disable import/no-extraneous-dependencies */
import 'jest-enzyme';
import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = new JSDOM(documentHTML);
global.window = document.parentWindow;

global.window.resizeTo = (width, height) => {
  global.window.innerWidth = width || global.window.innerWidth;
  global.window.innerHeight = height || global.height.innerHeight;
  global.window.dispatchEvent(new Event('resize'));
};
