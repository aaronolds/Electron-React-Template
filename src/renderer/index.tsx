// import React from 'react';
// import ReactDOM from 'react-dom';

// const mainElement = document.createElement('div');
// document.body.appendChild(mainElement);

// const App = () => {
//     return (<h1>        Hi from a world app            </h1>);
// };

// ReactDOM.render(<App />, mainElement);

import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import reducer from "../store/reducer";

const mainElement = document.createElement('div');
mainElement.setAttribute("id", "root");
document.body.appendChild(mainElement);

const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement
);
