"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function isIOS() {
  return navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
exports.isIOS = isIOS;
