import React from 'react';
import {Main} from "./pages/Main";
import {Provider} from "react-redux";
import {store} from "./store";

export const App = () => {
  return (
      <Provider store={store}>
        <Main/>
      </Provider>
  );
};




