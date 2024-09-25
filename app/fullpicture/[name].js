import { Link } from "expo-router";
import { Text, View, Image, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getPokeDetails } from "../../lib/pokemons";
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
          headerStyle: {},
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "Imagen completa",
          headerRight: () => {},
        }}
      />
      <View>
        {pokeInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <View className="justify-center items-center text-center">
            <Image
              className="mb-4 rounded"
              source={{ uri: pokeInfo.imgOrig }}
              style={{ width: 520, height: 700, resizeMode: "contain" }}
            />
          </View>
        )}
      </View>
    </Screen>
  );
}
