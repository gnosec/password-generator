export const Numbers: string[] = '0123456789'.split('');
export const Letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  .split('');
export const BasicSymbols: string[] = '_-+.'.split('');
export const StandardSymbols: string[] = '!@#$%^&*'.split('');
export const ExtendedSymbols: string[] = '~`=(){}[]|\\:;"\'<>,?/'.split('');
export const Symbols: string[] = [...BasicSymbols, ...StandardSymbols, ...ExtendedSymbols];
export const Spaces: string[] = ' '.split('');