import { action } from '@storybook/addon-actions';

import { Meta } from '@storybook/react';

import { AddressForm } from '../src';

export default {
  component: AddressForm,
  title: 'baseui/AddressForm',
} as Meta;

export const Standard: React.VFC = () => {
  return (
    <div>
      <AddressForm onSubmit={action('onSubmit')} />
    </div>
  );
};

export const DisabledAutoCompleteForm: React.VFC = () => {
  return (
    <div>
      <AddressForm onSubmit={action('onSubmit')} disableAutoComplete />
    </div>
  );
};
