export function header({ title, username }) {
	return `<header><h1>${title}</h1><h2>${username}</h2></header>`;
}

export default function main({ title, username, users }) {
	return header({ title, username }) + content(users);
}

export function content(users) {
  return `<section>${users
    ? `<ul>${users.map((user) => `<li>${user.firstName}</li>`).join('')}</ul>`
    : '<p>No users</p>'
  }</section>`;
}
