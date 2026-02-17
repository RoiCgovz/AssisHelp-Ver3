import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 150,
  },

  logo: {
    fontSize: 60,
    marginRight: 15,
  },

  title: {
    fontSize: 28,
    color: "black",
    fontFamily: "Inter_700Bold",
  },

  buttonContainer: {
    width: "80%",
    alignItems: "center",
  },

  registerButton: {
    backgroundColor: "#2E82DB",
    width: "75%",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
  },

  loginButton: {
    backgroundColor: "#2E82DB",
    width: "75%",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 200,
  },

  buttonText: {
    color: "white",
    fontSize: 21,
    fontWeight: "600",
    fontFamily: "Inter_600SemiBold",
  },
});