import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

function GameScreen({ navigation }) {
  const [player, setPlayer] = useState(1);
  const [arrayTiles, setArrayTiles] = useState([]);
  const [winStatus, setWinStatus] = useState('')
  const handleTile = (tile) => {
    setArrayTiles([...arrayTiles, tile]);
    setPlayer(-player);
  };

  const handleCondition = (tileArray, arr1, arr2) => {
    let m = tileArray.every((currentValue) => arr1.includes(currentValue));
    let n = tileArray.every((currentValue) => arr2.includes(currentValue) );
    if(m === true  && arrayTiles.length <= 9 ){
        alert("Player 1 won")
        setWinStatus("player1")
        setArrayTiles([])
    }else if(n === true && arrayTiles.length <= 9){
        alert("Player 2 won")
        setWinStatus("player2")
        setArrayTiles([])
    }
    return m || n;
  };

  if(arrayTiles.length === 9 && winStatus === ""){
      alert ("tie")
      setArrayTiles([])
  }

  useEffect(() => {
    const successValues = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const player1Array = arrayTiles.filter((e, idx) => idx % 2 === 0);
    const player2Array = arrayTiles.filter((e, idx) => idx % 2 === 1);
    let k;
    successValues.forEach(
      (each) => (k = handleCondition(each, player1Array, player2Array))
    );
  }, [arrayTiles]);

  const player1tile = <Icon name="circle-outline" style={styles.tileO} />;
  const player2tile = <Icon name="close" style={styles.tileX} />;
  return (
    <View style={styles.container}>
      {/* Game Header part */}
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View style={{ display: "flex", width: "auto" }}>
          <Text style={styles.playertitle}>
            Player1 - <Text style={{ fontSize: 20 }}>o</Text>
          </Text>
          <Text style={styles.playertitle}>
            Player2 - <Text style={{ fontSize: 20 }}>×</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.startbtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.startbtntext}>GoBack</Text>
        </TouchableOpacity>
      </View>

      {/* Tic toe table */}

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={(e) => handleTile(0)}
            style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}
          >
            {arrayTiles.includes(0)
              ? arrayTiles.indexOf(0) % 2 === 0
                ? player1tile
                : player2tile
              : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => handleTile(1)}
            style={[styles.tile, { borderTopWidth: 0 }]}
          >
            {arrayTiles.includes(1)
              ? arrayTiles.indexOf(1) % 2 === 0
                ? player1tile
                : player2tile
              : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => handleTile(2)}
            style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}
          >
            {arrayTiles.includes(2)
              ? arrayTiles.indexOf(2) % 2 === 0
                ? player1tile
                : player2tile
              : null}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={(e) => handleTile(3)}
            style={[styles.tile, { borderLeftWidth: 0 }]}
          >
            {arrayTiles.includes(3)
              ? arrayTiles.indexOf(3) % 2 === 0
                ? player1tile
                : player2tile
              : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={(e) => handleTile(4)} style={styles.tile}>
            {arrayTiles.includes(4)
              ? arrayTiles.indexOf(4) % 2 === 0
                ? player1tile
                : player2tile
              : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => handleTile(5)}
            style={[styles.tile, { borderRightWidth: 0 }]}
          >
            {arrayTiles.includes(5)
              ? arrayTiles.indexOf(5) % 2 === 0
                ? player1tile
                : player2tile
              : null}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={(e) => handleTile(6)}
            style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}
          >
            {arrayTiles.includes(6)
              ? arrayTiles.indexOf(6) % 2 === 0
                ? player1tile
                : player2tile
              : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => handleTile(7)}
            style={[styles.tile, { borderBottomWidth: 0 }]}
          >
            {arrayTiles.includes(7)
              ? arrayTiles.indexOf(7) % 2 === 0
                ? player1tile
                : player2tile
              : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => handleTile(8)}
            style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}
          >
            {arrayTiles.includes(8)
              ? arrayTiles.indexOf(8) % 2 === 0
                ? player1tile
                : player2tile
              : null}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    // backgroundColor: "#rgb(82,45,108)",
  },
  startbtn: {
    backgroundColor: "#rgb(82,45,108)",
    borderRadius: 15,
    marginTop: 10,
    width: 60,
    height: 30,
  },
  tile: {
    borderWidth: 5,
    height: 100,
    width: 100,
    paddingTop: 15,
    paddingLeft: 15,
  },

  tileX: {
    color: "red",
    fontSize: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tileO: {
    color: "blue",
    fontSize: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  startbtntext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
    paddingTop: 8,
  },
  playertitle: {
    color: "#rgb(82,45,108)",
  },
});

export default GameScreen;
