const config = {
  apiUrl: 'http://localhost:5000/api',
};

const logout = () => {
  localStorage.removeItem('token');
};

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.error) {
        logout();
      }
      const error = data && data.error;
      return Promise.reject(error);
    }
    return data;
  });
};
const login = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${config.apiUrl}/auth/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem('token', user.user.token);
      return user;
    });
};
export default {
  login,
  logout,
};
