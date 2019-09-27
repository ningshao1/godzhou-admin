const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");
var path = require("path");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#40a9ff" },
    modules: true
  }),
  addWebpackAlias({
    "@asset": path.resolve("src/asset"),
    "@c": path.resolve("src/components")
  })
);
