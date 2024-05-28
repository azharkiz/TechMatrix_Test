import { ADD_LOCATION, FETCH_LOCATION_SUCCESS } from "../actions/type";

import { ActionTypes, locationsType } from "../actions/type";

interface State {
  locations: locationsType[];
}

const initialState: State = {
  locations: [],
};

const addReducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case ADD_LOCATION:
      return { ...state, locations: [...state.locations, action.payload] };
    case FETCH_LOCATION_SUCCESS:
      return { ...state, locations: action.payload };
    default:
      return state;
  }
};

export default addReducer;
