const path = require('path');

module.exports = {
  * render() {
    let { pathname } = this.params;
    pathname || (pathname = 'index.html');
    yield this.render(path.join(__dirname, `../../dev/${pathname}`));
  }
};
