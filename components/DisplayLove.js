import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DisplayLove = prop => {
  if (prop.data == "loading") {
    return <Text style={styles.text}>Please Enter Name</Text>;
  }
  if (prop.data.message) {
    return (
      <Text style={styles.text}>Sorry Something went wrong try again</Text>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{prop.data.percentage}%</Text>
        <Text style={styles.text}>{prop.data.result}</Text>
      </View>
    );
  }
};

export default DisplayLove;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 30,
    textAlign: "center"
  }
});
