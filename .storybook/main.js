const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    // 👈 and add this here
    config.resolve.alias = {
      ...config.resolve.alias,
      '@theme': path.resolve(__dirname, '../src/theme'),
      '@model': path.resolve(__dirname, '../src/model'),
    }

    return config
  },
}
