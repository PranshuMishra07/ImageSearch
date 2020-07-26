import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { globaldata } from "../src/models/index";
// import { PersistGate } from "redux-persist/es/integration/react";
// import configureStore from "./store";

const store = init({
  models: {
    globaldata,
  },
});

// const { persistor } = configureStore();

const Root = () => (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);

// import React from 'react';
// import Root from './src/native/index';
// import configureStore from './src/store/index';

// const { persistor, store } = configureStore();

// export default function App() {
//   return <Root store={store} persistor={persistor} />;
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(<Root />, document.querySelector("#root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
