document.querySelector(
  '[name="orig"]'
).value = require('!!raw-loader!./example.frag');
document.querySelector('[name="post"]').value = require('./example.frag');
