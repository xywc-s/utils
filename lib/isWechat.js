"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function isWechat() {
  return /micromessenger/i.test(navigator.userAgent);
}
exports.isWechat = isWechat;
