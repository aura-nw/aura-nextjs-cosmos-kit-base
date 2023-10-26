export const formatAddress = (addr: string): string =>
  addr.substring(0, 8) + '...' + addr.substring(addr.length - 8, addr.length);
