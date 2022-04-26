export const logger = (log: any) => {
  if (!IS_LIVE) {
    console.log(log);
  }
};
