import React, { useState } from "react";
import { View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions";
import { useScreenContext } from "../../services/ScreenContext";
import { RootState } from "../../commonType/types";
import StaticVarialbles from "../../preference/StaticVarialbles";
import styles from "./style";
const MapViewComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { locations } = useSelector((state: RootState) => state.locations);
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? "windowWidth" : "windowHeight"],
    screenContext[screenContext.isPortrait ? "windowHeight" : "windowWidth"]
  );
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [marker, setMarker] = useState<{ latitude: number; longitude: number }>(
    {
      latitude: 37.78825,
      longitude: -122.4324,
    }
  );
  const selectedLocation = (details: GooglePlaceDetail | null = null) => {
    if (details) {
      const { lat, lng } = details.geometry.location;
      setRegion({
        ...region,
        latitude: lat,
        longitude: lng,
      });
      setMarker({
        latitude: lat,
        longitude: lng,
      });
      dispatch(addItem({ id: locations.length + 1, name: details.name }));
    }
  };
  return (
    <View style={screenStyles.container}>
      <GooglePlacesAutocomplete
        placeholder={StaticVarialbles.SEARCH_KEY}
        fetchDetails={true}
        onPress={(data, details: GooglePlaceDetail | null = null) => {
          selectedLocation(details);
        }}
        query={{
          key: StaticVarialbles.API_KEY,
          language: "en",
        }}
        styles={{
          container: screenStyles.autocompleteContainer,
          listView: screenStyles.searchView,
        }}
      />
      <MapView
        style={screenStyles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        <Marker coordinate={marker} />
      </MapView>
    </View>
  );
};

export default MapViewComponent;
