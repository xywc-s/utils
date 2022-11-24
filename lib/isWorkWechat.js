"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function isWorkWechat() {
  return /wxwork/i.test(navigator.userAgent);
}
exports.isWorkWechat = isWorkWechat;
