/**
 * metro.config.js
 * Metro configuration for React Native
 */
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true
        }
      })
    },
    resolver: {
      assetExts,
      sourceExts: [...sourceExts, 'ts', 'tsx']
    }
  };
})();