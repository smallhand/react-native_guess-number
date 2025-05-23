import { View, Text, Pressable, Alert, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
  console.log("primary button");
  function pressHandler() {
    console.log("Pressed!");
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.buttonPressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    width: 100,
    backgroundColor: "#ab4543",
    borderRadius: 50,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  buttonInnerContainer: {
    elevation: 2,
  },
  buttonPressed: {
    opacity: 0.7,
    //backgroundColor: "red",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
