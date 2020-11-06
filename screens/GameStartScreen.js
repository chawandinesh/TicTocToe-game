import React from "react";
import { View, Text, StyleSheet, TouchableOpacity ,BackHandler} from "react-native";
import { StatusBar } from "expo-status-bar";

function GameStartScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Click <Text style={{ fontWeight: "100", fontSize: 20 }}> START </Text>{" "}
        To Play
      </Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.startbtn}   onPress={() =>
        navigation.navigate('Game')
      }>
        <Text style={styles.startbtntext}>START</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.startbtn}   onPress={() =>
        BackHandler.exitApp()
      }>
        <Text style={styles.startbtntext}>EXIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#rgb(82,45,108)",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  startbtn: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 40,
    width: 100,
    height: 50,
  },
  startbtntext: {
    color: "#522d6c",
    textAlign: "center",
    fontSize: 20,
    paddingTop: 10,
  },
});

export default GameStartScreen;
