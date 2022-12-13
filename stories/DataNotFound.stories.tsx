import { Meta } from '@storybook/react';
import React from 'react';
import { DataNotFound } from '../src';

export default {
  component: DataNotFound,
  title: 'Components/DataNotFound',
} as Meta;

export const DataNotFoundBlank: React.VFC = () => <DataNotFound />;

export const DataNotFoundWithCreateButton: React.VFC = () => (
  <DataNotFound>
    <button type="button" className="btn-primary btn">
      Create
    </button>
  </DataNotFound>
);

export const DataNotFoundWithMessage: React.VFC = () => (
  <DataNotFound
    title="Welcome to pull requests!"
    description="Pull requests help you collaborate on code with other people. As pull requests are created, they’ll appear here in a searchable and filterable list. To get started, you should create a pull request."
  />
);
