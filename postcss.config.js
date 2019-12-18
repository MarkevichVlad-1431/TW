const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const css_mqpacker = require('css-mqpacker');

module.exports = {
  plugins: [
    autoprefixer(),
    cssnano({
      preset: 'default',
    }),
    css_mqpacker(),
  ],
};
