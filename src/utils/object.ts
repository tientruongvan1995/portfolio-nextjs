export function isValidObject(obj?: unknown): obj is object {
  return (
    obj !== null &&
    obj !== undefined &&
    obj !== '' &&
    typeof obj === 'object' &&
    Object.keys(obj).length > 0
  );
}
