export const GetUserSession = () => {
  const userSession = JSON.parse(localStorage.getItem('session'));
  return userSession;
}

