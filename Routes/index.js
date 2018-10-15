
const routes = (app) => {
  app.get('/api/v1/', (req, res) => {
    res.status(200).send({ message: 'Welcome to the Todo App\'s API' });
  });
};

export default routes;
