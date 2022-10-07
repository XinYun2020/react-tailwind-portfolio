import '../styles/index.scss';
import * as NextImage from "next/image";

import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';



addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
      <OriginalNextImage
          {...props}
          unoptimized
      />
  ),
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withTests({
    results,
  }),
];