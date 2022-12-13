import { action } from '@storybook/addon-actions';

import { Meta } from '@storybook/react';
import React from 'react';

import { ShortcutsBoard } from '../src';

export default {
  component: ShortcutsBoard,
  title: 'components/ShortcutsBoard',
} as Meta;

export const Standard: React.VFC = () => {
  const shortcuts = [
    {
      title: 'Repositories',
      items: [
        { description: 'Open repository', keys: ['r'] },
        { description: 'Open repository in new tab', keys: ['shift', 'r'] },
        {
          description: 'Open repository in new window',
          keys: ['shift', 'alt', 'r'],
        },
      ],
    },
    {
      title: 'Issues',
      items: [
        { description: 'Open issue', keys: ['i'] },
        { description: 'Open issue in new tab', keys: ['shift', 'i'] },
        {
          description: 'Open issue in new window',
          keys: ['shift', 'alt', 'i'],
        },
      ],
    },
    {
      title: 'Pull requests',
      items: [
        { description: 'Open pull', keys: ['p'] },
        { description: 'Open pull in new tab', keys: ['shift', 'p'] },
        { description: 'Open pull in new window', keys: ['shift', 'alt', 'p'] },
      ],
    },
  ];
  return (
    <div className="block space-y-4 md:grid md:grid-cols-2 md:gap-10 md:space-y-0">
      <ShortcutsBoard {...shortcuts[0]} />
      <ShortcutsBoard {...shortcuts[1]} />
      <ShortcutsBoard {...shortcuts[2]} />
    </div>
  );
};
