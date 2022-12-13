import { action } from '@storybook/addon-actions';

import { Meta } from '@storybook/react';
import React from 'react';
import { LoadingIcon, ScreenLoading, SectionLoading } from '../src';

export default {
  title: 'components/Loading',
} as Meta;

export const Icon = () => <LoadingIcon />;

export const Screen = () => <ScreenLoading />;

export const SectionLoadingWithoutMessage: React.VFC = () => (
  <div className="relative h-80 w-80">
    <SectionLoading />
  </div>
);
export const SectionLoadingWithMessage: React.VFC = () => (
  <div className="relative h-80 w-80">
    <SectionLoading message="It takes long time!" />
  </div>
);
