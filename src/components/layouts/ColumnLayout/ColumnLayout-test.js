import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import ColumnLayout from './ColumnLayout';

test('ColumnLayout classes', assert => {
  const props = {
    collectionId: 'aaa',
  };
  const output = shallow(<ColumnLayout {...props} />);

  const expected = true;
  const actual = output.hasClass('Climb-ColumnLayout');

  assert.equal(
    actual,
    expected,
    'Climb-ColumnLayout'
  );

  assert.end();

  // TODO: Add child node className tests
});
