import changeNumber from "./incDec";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber: changeNumber,
});

export default rootReducer;
