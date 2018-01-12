import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';

import LoaderWrapper from 'common/components/Loader/LoaderWrapper';

describe('Loader component', () => {
  describe('snapshots', () => {
    it('render', () => {
      const component = renderer.create(
        <LoaderWrapper />,
      );
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('render with props', () => {
      const component = renderer.create(
        <LoaderWrapper bgColor="red" yPosition="10" size="50" />,
      );
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('enzyme', () => {
    it('show loader', () => {
      const loader = render(
        <LoaderWrapper />,
      );

      expect(loader.find('.loader')).toHaveLength(1);
    });
  });
});
