import { call, put, takeEvery } from "redux-saga/effects";
import { GET_SONG, ADD_SONG, DELETE_SONG, UPDATE_SONG } from "./song.reducer";

function* fetchSongs() {
  try {
    let result = yield call(() =>
      fetch(`${process.env.REACT_APP_BASE_URL}/api/songs`)
    );
    // console.log(result);
    const song = yield result.json();
    yield put(GET_SONG(song));
  } catch (e) {
    // yield put({ type: "TODO_FETCH_FAILED" });
  }
}

function* addNewSong(action) {
  try {
    let result = yield call(() =>
      fetch(`${process.env.REACT_APP_BASE_URL}/api/songs`, {
        method: "POST",
        body: action.payload,
      })
    );
    console.log(result);
    const song = yield result.json();
    yield put(GET_SONG());
  } catch (e) {
    // yield put({ type: "TODO_FETCH_FAILED" });
  }
}

function* deleteSongById(action) {
  console.log(action.payload);
  try {
    const response = yield call(
      fetch,
      `${process.env.REACT_APP_BASE_URL}/api/songs/${action.payload._id}`,
      {
        method: "DELETE",
      }
    );
    const data = yield call([response, "json"]);
    yield put(GET_SONG());
  } catch (error) {
    // yield put(setError(error));
    console.log(error);
  }
}

function* updateSongById(action) {
  try {
    yield call(() =>
      fetch(
        `${process.env.REACT_APP_BASE_URL}/api/songs/${action.payload[1]}`,
        {
          method: "PUT",
          body: action.payload[0],
        }
      )
    );
    // const data = yield call([response, "json"]);
    yield put(GET_SONG());
  } catch (error) {
    // yield put(setError(error));
    console.log(error);
  }
}

function* songSaga() {
  yield takeEvery("SONG/GET_SONG", fetchSongs);
  yield takeEvery("SONG/ADD_SONG", addNewSong);
  yield takeEvery("SONG/DELETE_SONG", deleteSongById);
  yield takeEvery("SONG/UPDATE_SONG", updateSongById);
}

export default songSaga;
