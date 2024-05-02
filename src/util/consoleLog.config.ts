export default function runConfig() {
  console.log('#Enabled: Configuring console.log...');

  const cl = console.log;
  const clw = console.warn;
  const cle = console.error;
  const clc = console.clear;
  const timestamp = () => new Date().toLocaleTimeString();

  console.log = function (...args: Parameters<typeof console.log>) {
    cl(' ', timestamp(), 'Logger: ', ...args);
  };

  console.clear = function () {
    clc();
    cl('Console cleared at', new Date().toLocaleTimeString());
  };

  console.warn = function (...args: Parameters<typeof console.warn>) {
    clw(timestamp(), 'Warning:', ...args);
  };

  console.error = function (...args: Parameters<typeof console.error>) {
    cle(timestamp(), 'Error:  ', ...args);
  };

  console.log('#Configured: console.log...');
  console.warn('#Configured: console.warn...');
  console.error('#Configured: console.error...');
}
