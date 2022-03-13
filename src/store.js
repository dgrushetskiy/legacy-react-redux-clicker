import {createStore, combineReducers} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT": {
            return state + 1;
        }
        case "DECREMENT": {
            return state - 1;
        }
        case "RESET": {
            return 0;
        }
        default: {
            return state;
        }
    }
};

const rootReducer = combineReducers({
    counter: counterReducer,
});

export const store = createStore(
    rootReducer,
    devToolsEnhancer()
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// actions
export const increment = {type: "INCREMENT"};
export const decrement = {type: "DECREMENT"};
export const reset = {type: "RESET"};
