import { Text, View, StyleSheet } from "react-native";

export default function FilesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cora is a Flower</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});
