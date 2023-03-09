import reducer from "./Song/song.reducer";
import createSagaMiddleware from "redux-saga";
import songSaga from "./Song/sagas";
import { configureStore } from "@reduxjs/toolkit";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(songSaga);
export default store;
