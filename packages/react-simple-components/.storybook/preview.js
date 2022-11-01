import '../tailwind.css';
// https://github.com/storybookjs/storybook/blob/master/addons/viewport/src/defaults.ts#L60-L67
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const iphonese2 = INITIAL_VIEWPORTS.iphonese2;
const ipad = INITIAL_VIEWPORTS.ipad;

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  viewport: {
    viewports: {
      iphonese2,
      ipad,
    },
  },
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
