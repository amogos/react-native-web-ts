module.exports = api => {
  api.cache(true);

  return {
    plugins: [
      'babel-plugin-relay',
      '@babel/plugin-transform-runtime',
      // '@babel/plugin-proposal-class-properties', // Breaks fast refresh on native for some reason, left here if needed
    ].map(require.resolve),
    presets: ['module:metro-react-native-babel-preset'],
  };
};
