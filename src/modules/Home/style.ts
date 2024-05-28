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
      backgroundColor: Colors.name.white,
    },
    fullView: {
      flex: 1,
    },
    locationsView: {
      flex: 0.7,
    },
    listView: {
      flex: 0.3,
    },
  });

export default styles;
