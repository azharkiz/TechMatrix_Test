import React from "react";
import { View, FlatList, Text, ListRenderItem } from "react-native";
import { useSelector } from "react-redux";
import { useScreenContext } from "../../services/ScreenContext";
import { RootState, locationType } from "../../commonType/types";
import styles from "./style";
const SearchList: React.FC = () => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? "windowWidth" : "windowHeight"],
    screenContext[screenContext.isPortrait ? "windowHeight" : "windowWidth"]
  );
  const { locations } = useSelector((state: RootState) => state.locations);

  const renderItem: ListRenderItem<locationType> = ({ item }) => (
    <View style={screenStyles.renderMainView}>
      <Text style={screenStyles.textStyle}>{item.name}</Text>
    </View>
  );
  const ItemSeparator = () => <View style={screenStyles.itemSeparator} />;
  const Header = () => (
    <View style={screenStyles.headerView}>
      <Text style={screenStyles.headerText}>Searched locations</Text>
    </View>
  );
  return (
    <View style={screenStyles.container}>
      <View>
        <FlatList
          data={locations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={Header}
        />
      </View>
    </View>
  );
};

export default SearchList;
