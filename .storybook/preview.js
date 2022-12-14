import '../tailwind.css';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f6f8fa',
      },
      {
        name: 'dark',
        value: '#202124',
      },
    ],
  },
};
