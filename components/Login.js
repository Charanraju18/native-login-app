import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
} from "react-native";

function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <TextInput type="text" placeholder="Username" style={styles.inputdiv} />
      <TextInput
        type="password"
        placeholder="Password"
        secureTextEntry={true}
        style={styles.inputdiv}
      />
      <View style={styles.loginbtn}>
        <Text style={styles.text}>Login</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  loginText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  inputdiv: {
    width: 250,
    padding: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "rgba(1, 1, 1, 1)",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 25,
  },
  loginbtn: {
    width: 125,
    padding: 8,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "rgba(1, 1, 1, 1)",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 25,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "skyblue",
    fontWeight: "bold",
  },
});
export default Login;
