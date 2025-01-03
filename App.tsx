/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"

import {
  Colors,
  Header,
} from "react-native/Libraries/NewAppScreen"
import { name as AppName } from "./app.json"

const isDarkMode = false
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={styles.backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: "#FF4567",
            flex: 1,
          }}
        >
          <Text
            style={[
              styles.sectionTitle,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}
          >
            {AppName}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
  },
  backgroundStyle: {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  },
})

export default App
