const search = window.location.search.substring(1);
const convertPathname = (pathname: string) => {
  return {
    pathname: `${pathname ? '/' + pathname : ''}`,
    search: '?' + search,
  };
};

export const PATH = {
  DEFAULT: convertPathname('dashboard'),
};
