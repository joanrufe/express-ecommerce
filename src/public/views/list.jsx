const React = require('react');
const Router = require('react-router');

module.exports = (props) => {
  return (
    <div id='list'>
      <h1>Users</h1>
      <h6>Click on a user to see the details</h6>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              <Router.Link to={`/user/${user.id}`}>
                <img src={user.image} alt={user.title} />
              </Router.Link>
            </li>
          );
        })}

      </ul>
    </div>
  );
};