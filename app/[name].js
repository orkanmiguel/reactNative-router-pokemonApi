import { Link } from "expo-router";
import { Text, View, Image, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getPokeDetails } from "../lib/pokemons";
import { ActivityIndicator, ScrollView } from "react-native";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function Detail() {
  const { name } = useLocalSearchParams();
  const [pokeInfo, setPokeInfo] = useState(null);

  useEffect(() => {
    if (name) {
      getPokeDetails(name).then(setPokeInfo);
    }
  }, [pokeInfo]);

  /*  console.log(name); */
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "yellow",
            textTransform: "capitalize",
          },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: name,
          headerRight: () => {},
        }}
      />
      <View>
        {pokeInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <View>
            <View className="flex-row justify-center items-center text-center">
              <Link href={`/fullpicture/${pokeInfo.name}`} asChild>
                <StyledPressable className="active:opacity-70 border-black active:border-white/50 mb-2  rounded-xl">
                  <View className="justify-center items-center text-center">
                    <Text className="text-white text-2xl font-bold">
                      Normal
                    </Text>

                    <Image
                      className="mb-4 rounded"
                      source={{ uri: pokeInfo.imgOrig }}
                      style={{ width: 214, height: 300, resizeMode: "contain" }}
                    />
                  </View>
                </StyledPressable>
              </Link>
              <View className="justify-center items-center text-center">
                <Text className="text-white text-2xl font-bold">Shiny</Text>
                <Image
                  className="mb-4 rounded"
                  source={{ uri: pokeInfo.imgShiny }}
                  style={{ width: 214, height: 294, resizeMode: "contain" }}
                />
              </View>
            </View>
            <View className="justify-center items-center ">
              <Text className="text-white mb-2 text-4xl font-bold">
                Detalles del Pokemón:
              </Text>
            </View>
            <View className="flex flex-col space-y-5 bg-red-600 rounded-lg justify-center items-center h-60 ">
              <Text className="text-white mb-2 text-3xl font-bold">
                Experiencia Base : {pokeInfo.base_experience}
              </Text>
              <Text className="text-white mb-2 text-3xl font-bold ">
                Altura : {pokeInfo.height * 10} CM
              </Text>
              <Text className="text-white mb-2 text-3xl font-bold">
                Peso : {pokeInfo.weight / 10} KG
              </Text>
            </View>
          </View>
        )}
      </View>
    </Screen>
  );
}
