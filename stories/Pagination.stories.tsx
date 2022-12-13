import { action } from '@storybook/addon-actions';

import { Meta } from '@storybook/react';
import React from 'react';

import { Pagination } from '../src';

export default {
  component: Pagination,
  title: 'components/Pagination',
} as Meta;

export const Standard: React.VFC = () => (
  <Pagination
    start={1}
    end={10}
    total={10015}
    currentPage={1}
    totalPage={101}
    onChangePage={action('onChangePage')}
  />
);

export const LastPage: React.VFC = () => (
  <Pagination
    start={1}
    end={10}
    total={10015}
    currentPage={101}
    totalPage={101}
    onChangePage={action('onChangePage')}
  />
);

export const LostOfPage: React.VFC = () => (
  <Pagination
    start={1}
    end={10}
    total={10015}
    currentPage={1}
    totalPage={1001}
    onChangePage={action('onChangePage')}
  />
);
