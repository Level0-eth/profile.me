/* eslint-disable no-undef */
module.exports = {
  onCreateBabelConfig: function ({ actions }) {
    actions.setBabelPreset({
      name: "babel-preset-gatsby",
      options: {
        reactRuntime: "automatic"
      }
    });
  }
};
