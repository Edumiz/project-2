export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function uniq(a: Array<any>) {
  return Array.from(new Set(a));
}

export const stringify = (input: any) => {
  return JSON.stringify(input);
};
