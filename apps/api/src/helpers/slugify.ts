export const slugify = (str: string) => {
  const result = str
    .replace(/^\s+|\s+$/, '')
    .toLowerCase()
    .replace(/[^a-zก-๛ -]/, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return result;
};
