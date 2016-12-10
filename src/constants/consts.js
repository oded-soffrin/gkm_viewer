function isDev () {
  const isBrowser = typeof window !== 'undefined';
  return (isBrowser && window.location.href.indexOf('localhost') > -1);
}


export const API_URL = (isDev() ? 'https://localhost' : 'http://13.92.101.233') + ':4567';


