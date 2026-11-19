const KEYWORDS = new Set([
  'import',
  'final',
  'class',
  'private',
  'let',
  'init',
  'func',
  'throws',
  'guard',
  'else',
  'throw',
  'try',
  'self',
]);

/** The kit's code fragment tints keywords, names, comments and numbers; this sorts the lines into it. */
export function CodeLine({ text }: { text: string }) {
  const tokens = text.match(/\/\/\/?.*$|\b[A-Za-z_][A-Za-z0-9_]*\b|\s+|\S/g) ?? [];

  return (
    <>
      {tokens.map((token, index) => {
        if (token.startsWith('//')) {
          return (
            <span className="c" key={index}>
              {token}
            </span>
          );
        }
        if (KEYWORDS.has(token)) {
          return (
            <span className="k" key={index}>
              {token}
            </span>
          );
        }
        if (/^[A-Z]/.test(token)) {
          return (
            <span className="f" key={index}>
              {token}
            </span>
          );
        }
        return token;
      })}
    </>
  );
}
