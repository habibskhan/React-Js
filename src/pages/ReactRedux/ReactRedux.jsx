import React from "react";
import "./reactredux.scss";
import store from "./store";
import { Provider } from "react-redux";
import Component1 from "./Component_1";

store.subscribe(() => console.log(store.getState()));

const ReactRedux = () => {
  return (
    <>
      <Provider store={store}>
        <Component1 />
      </Provider>
    </>
  );
};

export default ReactRedux;
