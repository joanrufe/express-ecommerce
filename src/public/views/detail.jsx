const React = require('react');

module.exports = (props) => {
  const userId = props.params.id;
  const user = props.users.find((_user) => _user.id === userId);

  return (
    <div id='detail'>
      <h1>{user.title}</h1>
      <img src={user.image} alt={user.title} />
      <a href={user.url} target='_blank'>more info</a>
    </div>
  );
};