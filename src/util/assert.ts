export default function assert(...args: any[]) {
  const lastArg = args[args.length - 1];
  const errorMessage = typeof lastArg === 'string' ? lastArg : 'Assertion failed';

  for (const arg of args) {
    if (!arg) {
      throw new Error(errorMessage);
    }
  }

  return true;
}
