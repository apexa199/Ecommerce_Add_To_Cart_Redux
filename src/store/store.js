import { createStore } from "redux";
import rootReducer from "../reducer.js/main";

const store=createStore(rootReducer)

export default store