import { getActiveEffect } from './effect';
let back = new Set();
export function reactive(target) {
  let obj = new Proxy(target, {
    get(target, key) {
      back.add(getActiveEffect());
      return target[key];
    },
    set(target, key, val) {
      target[key] = val;
      back.forEach((fn) => fn());
      return true;
    },
  });
  return obj;
}
