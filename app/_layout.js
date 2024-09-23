import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { CircleInfoIcon } from "../components/Icons";
export default function Layout() {
  return (
    <View className="flex-1 bg-black ">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerRight: () => (
            <View className="flex-row item-end">
              <Link href="/about" className="text-blue-400 text-xl">
                <CircleInfoIcon />
              </Link>
            </View>
          ),
        }}
      />
    </View>
  );
}
