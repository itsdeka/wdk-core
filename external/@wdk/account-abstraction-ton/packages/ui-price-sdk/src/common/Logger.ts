export type Logger = {
  info(...args: any[]): void;
  log(...args: any[]): void;
  debug(...args: any[]): void;
  error(...args: any[]): void;
};
