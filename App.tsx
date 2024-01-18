import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import 'nativewind';

export default function App() {
  const [text, setText] = useState<string>("岐阜高専コンピュータ俱楽部");
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  const toggleText = () =>
    setText((currentText) =>
      currentText === "岐阜高専コンピュータ俱楽部"
        ? "新規部員募集中！"
        : "岐阜高専コンピュータ俱楽部"
    );

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 h-screen w-screen">
      <Text className="text-blue-500 text-xl">{text}</Text>
      <TouchableOpacity
        onPress={toggleText}
        className="mt-6 h-fit w-fit rounded-full bg-blue-500 px-4 py-2"
      >
        <Text className="color-white text-xl font-bold drop-shadow-2lx">
          現在の部員数↓
        </Text>
      </TouchableOpacity>

      <Text className="text-2xl mt-10 text-gray-500 font-bold">{count}</Text>
      <View className="mt-[20px] flex-row justify-center items-center">
        <TouchableOpacity
          onPress={handleDecrement}
          className="border-1 p-2 items-center justify-center rounded-full bg-blue-500 shadow"
        >
          <Icon name="remove" size={25} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleIncrement}
          className="border-1 ml-20 p-2 items-center justify-center rounded-full bg-blue-500 shadow"
        >
          <Icon name="add" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}