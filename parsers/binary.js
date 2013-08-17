'use strict';

var binarypack = require.resolve('js-binarypack')
  , Blob = require('w3c-blob')
  , load = require('load')
  , fs = require('fs');

//
// Compile the source to make it compatible in node. It only requires a `window`
// variable, but that's it, we can just fill that with dummy data.
//
var BinaryPack = load(binarypack, {
  Blob: Blob,
  window: {}
}).BinaryPack;

/**
 * Message encoder.
 *
 * @param {Mixed} data The data that needs to be transformed in to a string.
 * @param {Function} fn Completion callback.
 * @api public
 */
exports.encoder = function encoder(data, fn) {
  try { fn(undefined, BinaryPack.pack(data)); }
  catch (e) { fn(e); }
};

/**
 * Message encoder.
 *
 * @param {Mixed} data The data that needs to be transformed in to a string.
 * @param {Function} fn Completion callback.
 * @api public
 */
exports.decoder = function decoder(data, fn) {
  try { fn(undefined, BinaryPack.unpack(data)); }
  catch (e) { fn(e); }
};

//
// Expose the library so it can be added in our Primus module.
//
exports.library = fs.readFileSync(binarypack, 'utf-8');
