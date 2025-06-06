import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalStyleBox: {
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  modalText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalParagraph: {
    fontSize: 16,
    textAlign: "center",
    color: "#808080",
  },
  closeModalButton: {
    padding: 10,
    marginTop: 20,
    color: "#000",
    backgroundColor: "#35cbd6",
  },
  modalButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});
