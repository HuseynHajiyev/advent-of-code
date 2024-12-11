export const sleep = (ms = 5000): Promise<typeof setTimeout> =>
  new Promise((r) => setTimeout(r, ms));
