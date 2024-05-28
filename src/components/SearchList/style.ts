import { StyleSheet, Platform } from "react-native";
import { Colors } from "../../theme/Colors";
import StaticVariables from "../../preference/StaticVarialbles";

interface screenContextInterface {
  windowWidth: number;
  windowHeight: number;
  isTypeTablet: any;
  windowFontScale: number;
  isPortrait: any;
}
const styles = (
  screenContext: screenContextInterface,
  width: number,
  height: number
) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    renderMainView: {
      padding: width * 0.04,
      backgroundColor: Colors.name.white,
    },
    textStyle: {
      color: Colors.name.black,
      fontSize:
        (screenContext.isTypeTablet ? 24 : 15) / screenContext.windowFontScale,
      fontWeight: "300",
    },
    itemSeparator: {
      height: height * 0.001,
      backgroundColor: Colors.name.lightGray,
      marginRight: width * 0.04,
      marginLeft: width * 0.04,
    },
    headerView: {
      padding: height * 0.02,
      backgroundColor: Colors.name.lightGray,
      alignItems: "center",
    },
    headerText: {
      fontSize:
        (screenContext.isTypeTablet ? 30 : 18) / screenContext.windowFontScale,
      fontWeight: "500",
      color: Colors.name.black,
    },
  });

export default styles;
