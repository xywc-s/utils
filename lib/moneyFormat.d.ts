/**
 * 格式化金额
 * @param number 金额数
 * @param decimals 小数点后的位数, 默认2
 * @param decPoint 小数点符号, 默认,(英文逗号)
 * @param thousandsSep 千分位符号, 默认.(英文句号)
 * @example
 * moneyFormat(10000000) // 10,000,000.00
 * moneyFormat(10000000, 3, '.', '-') // 10-000-000.000
 */
export declare const moneyFormat: (number: string | number, decimals?: string | number | undefined, decPoint?: string | undefined, thousandsSep?: string | undefined) => string;
