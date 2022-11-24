/**
 * 通过url下载文件
 * @param url 文件url地址
 * @param fileName 完整文件名, 如: a.pdf
 */
export declare function downloadFileByUrl(url: string, fileName: string): void;
/**
 * 通过Blob数据下载文件
 * @param data Blob类型数据
 * @param fileName 完整文件名, 如: a.pdf
 */
export declare function downloadFileByBlob(data: BlobPart, fileName: string): void;
/**
 * 通过url下载文件
 * @param url 文件url地址
 * @param fileName 完整文件名, 如: a.pdf
 */
export declare function download(url: string, fileName: string): void;
/**
 * 从请求响应解析文件名和扩展名
 * @param response 请求响应
 */
export declare function parseFileName(response: any): {
    fileName: string;
    suffix: string;
};
