const loginURI = location.origin + '/auth';

export default async function checkLogin(user, password) {
  const res = await fetch(loginURI, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user, password})
  });
  return await res.json();
}