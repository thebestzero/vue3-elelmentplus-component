// 把驼峰转换成横杠连接
export const toLine = (value: string): string => {
  function upperToHyphenLower(match: string): string {
    return "-" + match.toLowerCase();
  }
  return value.replace(/[A-Z]/g, upperToHyphenLower);
};
