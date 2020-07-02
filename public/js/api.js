const loginURI = location.origin + '/auth';
const usersURI = location.origin + '/api/users';

export async function doLogin(user, password) {
  const res = await fetch(loginURI, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user, password})
  });
  const data = await res.json();
  const { msg, token } = data;
  if(msg === "OK") {
    localStorage.setItem('token', token);
  } else {
    localStorage.clear();
  }
  return msg === "OK";
}


export async function fetchUsers() {
  const res = await fetch(usersURI, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "authorization": "Bearer " + localStorage.getItem('token')
    },
  });
  return await res.json();
}