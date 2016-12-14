function isDev () {
  const isBrowser = typeof window !== 'undefined';
  return (isBrowser && window.location.href.indexOf('localhost') > -1);
}

export const API_URL = (isDev() ? 'https://localhost:4567/api' : 'http://13.92.101.233/api');
