/**
 * PokeAPI returns lowercase, hyphenated names ("lightning-rod", "mr-mime").
 * Turn them into something a person would write: "Lightning Rod".
 */
export const humanize = (value?: string) => {
  if (!value) return '';

  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};
