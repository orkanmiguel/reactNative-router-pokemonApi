import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import icon from "./assets/icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png`,
        }}
        style={{ width: 300, height: 300 }}
      />
      <Text style={styles.text}>Hello OrkaN</Text>
      <Button title="Pulsa Aqui" onPress={() => alert("Hola")} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
