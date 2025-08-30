export function sanitize(value: string): string {
  let map: {[index: string]:string} = {}
  map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return value.replace(reg, (match: string): string =>(map[match]));
}
