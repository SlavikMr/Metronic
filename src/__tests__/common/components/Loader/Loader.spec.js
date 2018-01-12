import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Loader from 'common/components/Loader/Loader';

describe('Loader component', () => {
  describe('snapshots', () => {
    it('render', () => {
      const component = renderer.create(
        <Loader />,
      );
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('render with className', () => {
      const component = renderer.create(
        <Loader className="some-class" />,
      );
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('enzyme', () => {
    it('show loader', () => {
      const loader = shallow(
        <Loader />,
      );
      expect(loader.find('.loader')).toHaveLength(1);
    });
  });
});
