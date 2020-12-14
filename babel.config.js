// {
//   "presets": ["@nrwl/web/babel"],
//   "babelrcRoots": ["*"]
// }

module.exports = function (api) {
  api.cache(true);

  const presets = ['next/babel', '@nrwl/web/babel'];
  const plugins = ['inline-react-svg'];

  return {
    presets,
    plugins,
  };
};
