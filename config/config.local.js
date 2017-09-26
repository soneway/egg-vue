const path = require('path');

module.exports = (app) => {
  return {
    static: {
      router: '/index.html',
      dir: path.join(app.baseDir, 'dev')
    }
  };
};
