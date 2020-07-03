const React = require('react');

module.exports = (props) => {
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <title>React Engine Example App</title>
        <link rel='stylesheet' href='/styles.css'></link>
      </head>
      <body>
        <div>
          {/* Router now automatically populates props.children of your components based on the active route. https://github.com/rackt/react-router/blob/latest/CHANGES.md#routehandler */}
          {props.children}
        </div>
        <script src='/bundle.js'></script>
      </body>
    </html>
  );
};