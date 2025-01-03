import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";

export default function App() {
  return (
    <>
      {/* <Login /> */}
      <Signup />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});