import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DashBoardContainer from "./src/containers/DashBoardContainer";
import ContentComponent from "./src/containers/ContentComponent";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DashBoardContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1769ed'

  },
});
