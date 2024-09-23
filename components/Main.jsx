import { Screen } from "./Screen";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { getLatesPokemon } from "../lib/pokemons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedPokemonCard, PokemonCard } from "./pokemonCard";
import { CircleInfoIcon } from "./Icons";

export default function Main() {
  console.log("hola");
  const [pokemons, setPokemons] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatesPokemon().then((pokemons) => {
      /* console.log("entro pokemon"); */
      setPokemons(pokemons);
    });
  }, []);
  /*   console.log("pokimon:", pokemons); */
  /*   console.log(pokemons[1].image); */
  return (
    <Screen
      className="bg-black"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {pokemons.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator color={"#fff"} size={"large"} />
        </View>
      ) : (
        <FlatList
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.id}
          renderItem={({ item, index }) => (
            <AnimatedPokemonCard pokemon={item} index={index} />
          )}
        ></FlatList>
      )}
    </Screen>
  );
}
