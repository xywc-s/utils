"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function isAndroid() {
  return navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Adr") > -1 || navigator.userAgent.indexOf("Linux") > -1;
}
exports.isAndroid = isAndroid;
