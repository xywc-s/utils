"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const isIOS = require("./isIOS.js");
const isAndroid = require("./isAndroid.js");
function getOS() {
  if (isIOS.isIOS()) {
    return 1;
  }
  if (isAndroid.isAndroid()) {
    return 2;
  }
  return 3;
}
exports.getOS = getOS;
