import { useState } from "react";
import { View, Text, TextInput, Alert, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function GameStartScreen() {
  const [enterNumber, setEnterNumber] = useState("");

  function resetInputHandler() {
    setEnterNumber("");
  }

  function confirmInputHandler() {
    const userNumber = parseInt(enterNumber);

    if (isNaN(userNumber) || userNumber <= 0 || userNumber > 99) {
      Alert.alert("❗Oops", "Please enter a number range: 1 ~ 99", [
        { text: "Confirm", style: "default", onPress: resetInputHandler },
      ]);
      return;
    }
    resetInputHandler;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> Enter a Number </Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.numberInput}
        maxLength={2}
        onChangeText={(text) => setEnterNumber(text)}
        value={enterNumber}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 30,
    backgroundColor: "#ccc",
    alignItems: "center",
    borderRadius: 12,
  },
  titleText: {
    fontSize: 32,
    color: "#992233",
  },
  numberInput: {
    width: 50,
    height: 40,
    fontSize: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    fontWeight: "bold",
    color: "#aa3234",
    marginVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
  },
});
