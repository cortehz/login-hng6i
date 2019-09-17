import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Amplify from "aws-amplify";
import config from "./aws-exports";

import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(config);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to my HNGi6 Login Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#666",
    alignItems: "center",
    padding: 10,
    justifyContent: "center"
  },
  text: { color: "#fff", fontSize: 25 }
});

export default withAuthenticator(App, true);
