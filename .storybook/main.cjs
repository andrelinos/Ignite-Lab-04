const tsconfigPaths = require('vite-tsconfig-paths');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  staticDirs: ['../public'],
  async viteFinal(config, { configType }) {
    config.plugins.push(tsconfigPaths.default());

    if (configType === 'PRODUCTION') {
      config.base = '/ignite-lab-04/';
    }

    return config;
  },
};
