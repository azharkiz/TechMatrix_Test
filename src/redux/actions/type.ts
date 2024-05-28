export const ADD_LOCATION = "ADD_LOCATION";
export const FETCH_LOCATION = "FETCH_LOCATION";
export const FETCH_LOCATION_SUCCESS = "FETCH_LOCATION_SUCCESS";
export interface locationsType {
  id: number;
  name: string;
}

interface AddLocationAction {
  type: typeof ADD_LOCATION;
  payload: locationsType;
}

interface FetchLocationAction {
  type: typeof FETCH_LOCATION;
}

interface FetchLocationAddSuccessAction {
  type: typeof FETCH_LOCATION_SUCCESS;
  payload: locationsType[];
}

export type ActionTypes =
  | AddLocationAction
  | FetchLocationAction
  | FetchLocationAddSuccessAction;
export const fetchItemsSuccess = (
  locations: locationsType[]
): FetchLocationAddSuccessAction => ({
  type: FETCH_LOCATION_SUCCESS,
  payload: locations,
});
