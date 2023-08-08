module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        root: ['.'],
        alias: {
          "@blocks": "./src/Blocks",
          "@data": "./src/Data",
          "@contexts": "./src/Contexts",
          "@models": "./src/Models",
          "@routes": "./src/Routes",
          "@utils": "./src/Utils",
          "@views": "./src/Views"
        },
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
    ]
  };
};
