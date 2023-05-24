export const matchUrl = (url: string, pattern: string): boolean => {
  const regex = new RegExp(
    '^' + pattern.replace(/\*/g, '.*').replace(/\?/g, '\\?') + '$'
  );
  return !!url.match(regex);
};
