import '../styles/globals.css'
// import reducer from '../reducers/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { wrapper } from "../reducers";

// function MyApp({ Component, pageProps }) {
//   const store = createStore(reducer);
  // store.dispatch(
  //   {type: 'LOGIN_SUCCESS', user: 1}
  // )
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }

// export default MyApp

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
