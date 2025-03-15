export const API_HOST = process.env.REACT_APP_API_URL;

const getCookie = (cookieName) => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === cookieName) {
      return value;
    }
  }
  return null;
};

export const getHeaders = () => ({
  Authorization: 'Bearer ' + getCookie('jwtToken')
});

export const formatDate = (arg, locale = 'en-ZA') => {
  const date = new Date(arg);
  return new Intl.DateTimeFormat(locale).format(date);
};
