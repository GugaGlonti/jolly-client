export default function runConfig() {
  console.log('#Enabled: Configuring console.log...');

  const cl = console.log;

  console.log = function (...args: Parameters<typeof console.log>) {
    cl('Log:', ...args, new Date().toLocaleTimeString());
  };

  console.clear = function () {
    cl('Console cleared at', new Date().toLocaleTimeString());
  };

  cl(console);
}
