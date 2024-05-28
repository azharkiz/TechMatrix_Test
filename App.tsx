import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ScreenContextProvider} from './src/services/ScreenContext';
import Home from './src/modules/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.sectionContainer}>
        <ScreenContextProvider>
          <View style={styles.sectionContainer}>
            <Home />
          </View>
        </ScreenContextProvider>
      </SafeAreaView>
    </Provider>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
