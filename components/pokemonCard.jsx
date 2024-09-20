import { useEffect, useRef } from "react";
import { Image, Text, View, StyleSheet, Animated } from "react-native";
import { Nro } from "./nro";

export function PokemonCard({ pokemon }) {
  return (
    <View
      key={pokemon.id}
      className="flex-row bg-gray-300/10 p-4 rounded-xl gap-4 mb-10"
    >
      {/* <Text style={styles.id}>{pokemon.id}</Text> */}
      <Nro id={pokemon.id} />
      <Image source={{ uri: pokemon.image }} style={styles.img} />
      <View>
        <Text className="mb-10" style={styles.name}>
          {pokemon.name}
        </Text>
        <Text className="mt-2 flex-shrink" style={styles.detall}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          amet velit sed ut ducimus perspiciatis harum reiciendis quia deserunt
          delectus tempora, accusantium magni aspernatur provident porro veniam
          minima exercitationem eum.
        </Text>
      </View>
    </View>
  );
}
export function AnimatedPokemonCard({ pokemon, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <PokemonCard pokemon={pokemon} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 42 },
  id: { fontSize: 15, fontWeight: "bold", marginBottom: 10, color: "yellow" },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textTransform: "capitalize",
  },
  detall: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  img: { width: 150, height: 150, borderRadius: 10, resizeMode: "contain" },
});
