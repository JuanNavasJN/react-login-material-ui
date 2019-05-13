import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import state from "././reducers/state";
import Router from "./routes/Router";
import "./css/index.css";

const reducer = combineReducers({
    state
});

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default App;
