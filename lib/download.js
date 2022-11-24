"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function downloadFileByUrl(url, fileName) {
  console.log({ url, name: fileName });
  fetch(url, {
    headers: {
      responseType: "blob"
    }
  }).then((res) => res.blob()).then((blob) => downloadFileByBlob(blob, fileName));
}
function downloadFileByBlob(data, fileName) {
  const blob = new Blob([data]);
  if (window.navigator.msSaveBlob) {
    try {
      window.navigator.msSaveBlob(blob, fileName);
    } catch (e) {
      console.error(e);
    }
  } else {
    const url = window.URL.createObjectURL(blob);
    download(url, fileName);
    window.URL.revokeObjectURL(url);
  }
}
function download(url, fileName) {
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function parseFileName(response) {
  const str = response.headers["content-disposition"];
  if (!response || !str)
    throw new Error('\u6587\u4EF6\u540D\u79F0\u89E3\u6790\u9519\u8BEF, \u54CD\u5E94\u6570\u636E\u6709\u8BEF\u6216\u8005\u54CD\u5E94\u5934\u4E0D\u5B58\u5728"content-disposition"\u5C5E\u6027');
  let suffix = "";
  let fileName = "";
  if (str.lastIndexOf(".")) {
    fileName = decodeURI(str.substring(str.indexOf("=") + 1, str.lastIndexOf(".")));
    suffix = str.substring(str.lastIndexOf("."), str.length);
  }
  return {
    fileName,
    suffix
  };
}
exports.download = download;
exports.downloadFileByBlob = downloadFileByBlob;
exports.downloadFileByUrl = downloadFileByUrl;
exports.parseFileName = parseFileName;
