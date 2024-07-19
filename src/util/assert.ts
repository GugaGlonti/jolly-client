interface IAssert {
  condition: any;
  message?: string;
  errorType?: any;
}

export default function assert({ condition, message = 'Assertion failed', errorType = Error }: IAssert) {
  return (
    condition ||
    (() => {
      throw new errorType(message);
    })()
  );
}
