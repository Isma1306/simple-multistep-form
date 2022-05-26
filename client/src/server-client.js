const baseUrl = 'http://localhost:3003/users/';

export const sendUser = async function (user) {
  const body = JSON.stringify(user);
  try {
    const newUser = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    });
    return await newUser.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const getUsers = async function () {
  try {
    const users = await fetch(baseUrl, {
      method: 'GET',
    });
    return await users.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const deleteUser = async function (id) {
  try {
    const response = await fetch(`${baseUrl}${id}`, {
      method: 'DELETE',
    });
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};