import { Action } from "redux";
import { RootState } from "./store";

interface RecorderState {
  dateStart: string;
  dateStop: string;
}

const START = "recorder/start";
const STOP = "recorder/stop";

type StartAction = Action<typeof START>;
type StopAction = Action<typeof STOP>;

export const start = (): StartAction => ({
  type: START,
});

export const stop = (): StopAction => ({
  type: STOP,
});

export const selectRecorderState = (rootState: RootState) => {
  return rootState.recorder;
};
export const selectDateStart = (rootState: RootState) => selectRecorderState(rootState).dateStart;

const initialState: RecorderState = {
  dateStart: "",
  dateStop: "",
};

const recorderReducer = (state: RecorderState = initialState, action: StartAction | StopAction) => {
  switch (action.type) {
    case START:
      return { ...state, dateStart: new Date().toString() };

    case STOP:
      return { ...state, dateStart: "" };

    default:
      return state;
  }
};

export default recorderReducer;
