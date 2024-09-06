import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Unidad 1: Introducción',
      items: ['unit-1/introduction', 'unit-1/Kotlin', 'unit-1/basics', 'unit-1/void-safety'],
    },
  ],
};

export default sidebars;
