const DEFAULT_ERROR_MESSAGE = 'Assertion failed';

export default function assert(...args: any[]) {
  const lastArg = args[args.length - 1];
  const errorMessage = typeof lastArg === 'string' ? lastArg : DEFAULT_ERROR_MESSAGE;

  for (const arg of args) {
    if (!arg) {
      throw new Error(errorMessage);
    }
  }

  return true;
}
