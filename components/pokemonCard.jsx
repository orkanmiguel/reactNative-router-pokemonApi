import { useEffect, useRef } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { Nro } from "./nro";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function PokemonCard({ pokemon }) {
  return (
    <Link href={`/${pokemon.name}`} asChild>
      <StyledPressable className="active:opacity-70 border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl">
        <View key={pokemon.id} className="flex-row  ">
          {/* <Text style={styles.id}>{pokemon.id}</Text> */}
          <Nro id={pokemon.id} className="" />
          <Image source={{ uri: pokemon.image }} style={styles.img} />
          <View className="flex-shrink">
            <Text className="mb-10" style={styles.name}>
              {pokemon.name}
            </Text>
            <Text className="mt-2 flex-shrink" style={styles.detall}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              amet velit sed ut ducimus perspiciatis harum reiciendis quia
              deserunt delectus tempora, accusantium magni aspernatur provident
              porro veniam minima exercitationem eum.
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
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
