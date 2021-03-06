import { compose } from 'redux';

const env = process.env.REACT_APP_ENV;
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// typeof window === "object"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null;

export default env !== 'production' && composeWithDevTools ? composeWithDevTools : compose;
