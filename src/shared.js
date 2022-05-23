const { inspect } = require('util');

/** @type {import('util').InspectOptions} */
const inspectOpts = { colors: true, compact: false, numericSeparator: true };

function runFirst() {
  console.clear();
  console.log();
}

function log(x) {
  console.log(inspect(x, inspectOpts));
}

module.exports = {
  runFirst,
  inspectOpts,
  log,
};
