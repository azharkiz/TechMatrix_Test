import React, { useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/actions";
import { useScreenContext } from "../../services/ScreenContext";
import MapViewComponent from "../../components/MapViewComponent";
import SearchList from "../../components/SearchList";
import { RootState } from "../../commonType/types";
import styles from "./style";
const Home: React.FC = () => {
  const screenContext = useScreenContext();
  const dispatch = useDispatch();
  const { locations } = useSelector((state: RootState) => state.locations);
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? "windowWidth" : "windowHeight"],
    screenContext[screenContext.isPortrait ? "windowHeight" : "windowWidth"]
  );
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  return (
    <SafeAreaView style={screenStyles.container}>
      <View
        style={
          locations.length === 0
            ? screenStyles.fullView
            : screenStyles.locationsView
        }
      >
        <MapViewComponent />
      </View>
      {locations.length !== 0 ? (
        <View style={screenStyles.listView}>
          <SearchList />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Home;
