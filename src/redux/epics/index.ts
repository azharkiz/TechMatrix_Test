import { combineEpics, Epic, ofType } from "redux-observable";
import { map } from "rxjs/operators";
import {
  FETCH_LOCATION,
  fetchItemsSuccess,
  ActionTypes,
} from "../actions/type";
import { State } from "../reducer/type";

const fetchItemsEpic: Epic<ActionTypes, ActionTypes, State> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType(FETCH_LOCATION),
    map(() => fetchItemsSuccess(state$.value.locations.locations))
  );

export default combineEpics(fetchItemsEpic);
