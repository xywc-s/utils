function uuid() {
  const tempUrl = URL.createObjectURL(new Blob());
  const uuid2 = tempUrl.toString();
  URL.revokeObjectURL(tempUrl);
  return uuid2.substring(uuid2.lastIndexOf("/") + 1);
}
export {
  uuid
};
