import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
} from "react-native";

function Signup() {
  return (
    <View style={styles.container}>
      <Text style={styles.SignupText}>Signup</Text>
      <TextInput type="text" placeholder="Name" style={styles.inputdiv} />
      <TextInput type="email" placeholder="Email" style={styles.inputdiv} />
      <TextInput
        type="password"
        placeholder="Password"
        secureTextEntry={true}
        style={styles.inputdiv}
      />
      <TextInput
        type="password"
        placeholder="Confirm Password"
        secureTextEntry={true}
        style={styles.inputdiv}
      />
      <View style={styles.Signupbtn}>
        <Text style={styles.text}>Signup</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  SignupText: {
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
  Signupbtn: {
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
export default Signup;
