export {AURELIACLI} from './aurelia-cli';
export {FS}         from './fs';
export {SESSION}    from './session';
import {AURELIACLI} from './aurelia-cli';
import {FS}         from './fs';
import {SESSION}    from './session';

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

  callback(FS, SESSION, AURELIACLI);
}
