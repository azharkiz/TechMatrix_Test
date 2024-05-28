import { ADD_LOCATION, FETCH_LOCATION, FETCH_LOCATION_SUCCESS } from "./type";

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
interface locationsType {
  id: number;
  name: string;
}
export const addItem = (item: locationsType): AddLocationAction => ({
  type: ADD_LOCATION,
  payload: item,
});

export const fetchItems = (): FetchLocationAction => ({
  type: FETCH_LOCATION,
});

export const fetchItemsSuccess = (
  items: locationsType[]
): FetchLocationAddSuccessAction => ({
  type: FETCH_LOCATION_SUCCESS,
  payload: items,
});
