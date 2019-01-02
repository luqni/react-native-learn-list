import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DashBoardContainer from "./src/containers/DashBoardContainer";
import ContentComponent from "./src/containers/ContentComponent";
import FormContainer from "./src/containers/FormContainer";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<DashBoardContainer/>*/}
        <FormContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1769ed',
    alignItems:'center',
    justifyContent:'center'


  },
});
