export {AURELIACLI} from './aurelia-cli';
export {FS}         from './fs';
export {SESSION}    from './session';
export {PROCESSES}  from './processes';
export {NPM}        from './npm';

import {AURELIACLI} from './aurelia-cli';
import {FS}         from './fs';
import {SESSION}    from './session';
import {PROCESSES}  from './processes';
import {NPM}        from './npm';

export function initializePAL(callback) {
  if (typeof Object.getPropertyDescriptor !== 'function') {
    Object.getPropertyDescriptor = function(subject, name) {
      let pd = Object.getOwnPropertyDescriptor(subject, name);
      let proto = Object.getPrototypeOf(subject);
      while (typeof pd === 'undefined' && proto !== null) {
        pd = Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
      }
      return pd;
    };
  }

  callback(FS, SESSION, AURELIACLI, PROCESSES, NPM);
}
