require('./module_register');
const app = require('app');
const port = process.env.PORT_NUMBER;

const { 
  logError,
  handleClientError,
  handleError
} = require('utils');
const routes = require("routes");

app.use('/', routes);

app.use(logError);
app.use(handleClientError);
app.use(handleError);

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
