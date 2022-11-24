"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function hideMobile(mobile) {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
}
exports.hideMobile = hideMobile;
