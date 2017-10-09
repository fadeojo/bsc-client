// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import 'babel-polyfill';

global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};
