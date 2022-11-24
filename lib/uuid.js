"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function uuid() {
  const tempUrl = URL.createObjectURL(new Blob());
  const uuid2 = tempUrl.toString();
  URL.revokeObjectURL(tempUrl);
  return uuid2.substring(uuid2.lastIndexOf("/") + 1);
}
exports.uuid = uuid;
