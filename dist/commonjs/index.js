'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROCESSES = exports.SESSION = exports.FS = exports.AURELIACLI = undefined;

var _aureliaCli = require('./aurelia-cli');

Object.defineProperty(exports, 'AURELIACLI', {
  enumerable: true,
  get: function get() {
    return _aureliaCli.AURELIACLI;
  }
});

var _fs = require('./fs');

Object.defineProperty(exports, 'FS', {
  enumerable: true,
  get: function get() {
    return _fs.FS;
  }
});

var _session = require('./session');

Object.defineProperty(exports, 'SESSION', {
  enumerable: true,
  get: function get() {
    return _session.SESSION;
  }
});

var _processes = require('./processes');

Object.defineProperty(exports, 'PROCESSES', {
  enumerable: true,
  get: function get() {
    return _processes.PROCESSES;
  }
});
exports.initializePAL = initializePAL;
function initializePAL(callback) {
  if (typeof Object.getPropertyDescriptor !== 'function') {
    Object.getPropertyDescriptor = function (subject, name) {
      var pd = Object.getOwnPropertyDescriptor(subject, name);
      var proto = Object.getPrototypeOf(subject);
      while (typeof pd === 'undefined' && proto !== null) {
        pd = Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
      }
      return pd;
    };
  }

  callback(_fs.FS, _session.SESSION, _aureliaCli.AURELIACLI, _processes.PROCESSES);
}