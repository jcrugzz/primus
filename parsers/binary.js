'use strict';

var binary = require('binarypack');

/**
 * Message encoder.
 *
 * @param {Mixed} data The data that needs to be transformed into a string
 * @param {Function} fn Completion callback.
 * @api public
 */
exports.encoder = function encoder(data, fn) {
  try {fn(undefined, binary.pack(data)) }
  catch (e) { fn(e) }
};

/**
 * Message decoder.
 *
 * @param {Mixed} data The data to be decoded into a buffer
 * @param {Function} fn Completion callback
 * @api public
 */
exports.decoder = function decoder(data, fn) {
  try { fn(undefined, binary.unpack(data)) }
  catch (e) { fn(e) }
};

exports.library = require('fs').readFileSync(require.resolve('binarypack'), 'utf-8');
