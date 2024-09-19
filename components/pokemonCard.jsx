import { useEffect, useRef } from "react";
import { Image, Text, View, StyleSheet, Animated } from "react-native";

export function PokemonCard({ pokemon }) {
  return (
    <View style={styles.card} key={pokemon.id}>
      <Text style={styles.id}>{pokemon.id}</Text>
      <Image source={{ uri: pokemon.image }} style={styles.img} />

      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.detall}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet
        velit sed ut ducimus perspiciatis harum reiciendis quia deserunt
        delectus tempora, accusantium magni aspernatur provident porro veniam
        minima exercitationem eum.
      </Text>
    </View>
  );
}
export function AnimatedPokemonCard({ pokemon, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
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
  img: { width: 200, height: 120, borderRadius: 10, resizeMode: "contain" },
});
