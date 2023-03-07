const axios = require('axios').default;

const backendUrl = (endpoint) => `http://localhost:3001/${endpoint}`;

const httpClient = axios.create();

httpClient.defaults.timeout = 500;

const registUser = async ({ name, email, password }) => {
  let error = false;
  try {
    const res = await httpClient.post(
      backendUrl('register'),
      {
        name, email, password,
      },
    );
    console.log('passou: ', res);
    const saveUser = {
      name,
      email,
      token: res.data.token,
    };
    localStorage.setItem('user', JSON.stringify(saveUser));
  } catch (err) {
    console.log('Erro: ', err);
    error = true;
  }
  return { error };
};

const loginUser = async ({ email, password }) => {
  let error = false;
  try {
    const res = await httpClient.post(backendUrl('login'), { email, password });
    console.log('passou: ', res);
    const { token, user } = res.data;
    const saveUser = {
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    };
    localStorage.setItem('user', JSON.stringify(saveUser));
  } catch (err) {
    console.log('Erro: ', err);
    error = true;
  }
  return { error };
};

module.exports = { httpClient, registUser, loginUser, backendUrl };
