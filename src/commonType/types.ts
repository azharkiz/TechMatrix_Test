export interface RootState {
  locations: {
    locations: locationType[];
  };
}
export interface locationType {
  id: number;
  name: string;
}
