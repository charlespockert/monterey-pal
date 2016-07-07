export {AURELIACLI} from './aurelia-cli';
export {FS}         from './fs';
export {SESSION}    from './session';
export {PROCESSES}  from './processes';
export {NPM}        from './npm';
export {JSPM}       from './jspm';
export {OS}         from './os';

import {AURELIACLI} from './aurelia-cli';
import {FS}         from './fs';
import {SESSION}    from './session';
import {PROCESSES}  from './processes';
import {NPM}        from './npm';
import {JSPM}       from './jspm';
import {OS}         from './os';

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

  callback(FS, SESSION, AURELIACLI, PROCESSES, NPM, JSPM, OS);
}
