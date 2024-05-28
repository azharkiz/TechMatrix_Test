import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

interface screenContextInterface {
  windowWidth: number;
  windowHeight: number;
  isTypeTablet: any;
  windowFontScale: number;
  isPortrait: any;
}
const styles = (
  screenContext: screenContextInterface,
  width: any,
  height: any
) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
    },
    autocompleteContainer: {
      position: "absolute",
      top: height * 0.02,
      margin: width * 0.02,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    searchView: {
      backgroundColor: Colors.name.white,
      marginTop: height * 0.05,
      elevation: 1,
      position: "absolute",
      zIndex: 1500,
    },
  });

export default styles;
