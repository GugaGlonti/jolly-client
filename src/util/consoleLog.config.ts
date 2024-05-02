export default function runConfig() {
  console.log('#Enabled: Configuring console.log...');

  const cl = console.log;
  const clw = console.warn;
  const cle = console.error;
  const clc = console.clear;

  console.log = function (...args: Parameters<typeof console.log>) {
    cl('Logger:', ...args, new Date().toLocaleTimeString());
  };

  console.clear = function () {
    clc();
    cl('Console cleared at', new Date().toLocaleTimeString());
  };

  console.warn = function (...args: Parameters<typeof console.warn>) {
    clw('Warning:', ...args, new Date().toLocaleTimeString());
  };

  console.error = function (...args: Parameters<typeof console.error>) {
    cle('Error:', ...args, new Date().toLocaleTimeString());
  };

  cl(console);
}
