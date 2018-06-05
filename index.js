const glslify = require('glslify');
const path = require('path');

module.exports = glslifyWebpackLoader;

function glslifyWebpackLoader(source) {
  var basedir = path.dirname(this.resourcePath);
  var self = this;

  this.callback = this.async();
  this.cacheable(true);

  try {
    const comp = glslify.compile(source, {
      inline: true,
      basedir: basedir,
    });
    self.callback(null, comp);
  } catch (e) {
    self.callback(e, '');
  }
}
