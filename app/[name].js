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
          <ScrollView>
            <View className="flex-row justify-center items-center text-center">
              <Link href={`/fullpicture/${pokeInfo.name}`} asChild>
                <StyledPressable className="active:opacity-70 border-black active:border-white/50 mb-2  rounded-xl">
                  <View className="justify-center items-center text-center">
                    <Text className="text-white">Normal</Text>

                    <Image
                      className="mb-4 rounded"
                      source={{ uri: pokeInfo.imgOrig }}
                      style={{ width: 214, height: 300, resizeMode: "contain" }}
                    />
                  </View>
                </StyledPressable>
              </Link>
              <View className="justify-center items-center text-center">
                <Text className="text-white">Shiny</Text>
                <Image
                  className="mb-4 rounded"
                  source={{ uri: pokeInfo.imgShiny }}
                  style={{ width: 214, height: 294, resizeMode: "contain" }}
                />
              </View>
            </View>
            <View className="justify-center items-center">
              <Text className="text-white font-bold mb-8 font-size-40">
                Detalle del Pokemon:
              </Text>
              <Text className="text-white">
                Experiencia Base : {pokeInfo.base_experience}
              </Text>
              <Text className="text-white">Altura : {pokeInfo.height}</Text>
              <Text className="text-white">Peso : {pokeInfo.weight}</Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
