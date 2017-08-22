module.exports = (app) => {
  const {
    controller: {
      index
    }
  } = app;

  app.get('/', index.render);
};
