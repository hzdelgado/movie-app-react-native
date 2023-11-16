import { StyleSheet, View } from "react-native";
import ListMovies from "../components/ListMovies";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ListMovies />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});