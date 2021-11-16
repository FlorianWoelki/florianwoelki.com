export const sortByDate = (a: string, b: string): number => {
  return new Date(b).getTime() - new Date(a).getTime();
};

export const classes = (
  dynamic: Record<string, boolean>,
  classes: string = '',
): string => {
  return Object.entries(dynamic)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(' ')
    .concat(' ')
    .concat(classes);
};
