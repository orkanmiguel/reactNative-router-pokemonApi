import { View, Text } from "react-native";

export function Nro({ id }) {
  //numero del pokemon segun si es par o impar, para turnar los colores.
  const getColors = () => {
    const nume = id;
    if (nume % 2 === 0) {
      return "bg-red-500 text-white";
    }
    if (nume % 2 !== 0) {
      return "bg-yellow-500 text-white";
    }
    return "bg-green-500 text-white";
  };

  const className = getColors();

  return (
    <View
      className={`${className} w-11 h-11 rounded-full justify-center items-center`}
    >
      <Text className="text-lg font-bold text-white ">{id}</Text>
    </View>
  );
}
