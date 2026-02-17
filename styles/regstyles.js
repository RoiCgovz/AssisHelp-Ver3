import { StyleSheet } from "react-native";

export const regStyles = StyleSheet.create({
  topLeftButton: {
    position: "absolute",
    top: 30,
    left: 20,
  },

  regHeader: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: 30,
    marginTop: 60,
  },   

  titleText: {
   fontSize: 35,
   color: "black",
   fontFamily: "Inter_700Bold",
  },
  
  backText: {
    fontSize: 35,
    color: "black",
    fontFamily: "Inter_700Bold",
    marginLeft: 40, 
  },

  inputContainer: {
    flex: 1,
    padding: 20,
    width: "100%",
  },

  inputText: {
    height: 65,
    marginTop: 45,
    backgroundColor: "#FFFFFF", 
    borderRadius: 16,         
    paddingHorizontal: 16,
    fontSize: 18,
    elevation: 4,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
    fontFamily: "Inter_600SemiBold",
    },

  regButton: {
    backgroundColor: "#2E82DB",
    width: "75%",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 50
  },

  buttonContainer: {
    width: "80%",
    alignItems: "center",
  },
  
  buttonText: {
    color: "white",
    fontSize: 21,
    fontWeight: "600",
    fontFamily: "Inter_600SemiBold",
  },
});