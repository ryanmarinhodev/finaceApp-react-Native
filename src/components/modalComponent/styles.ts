import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewModal: {
    flex: 1,
    padding: 30,
    backgroundColor: "#000",
  },
  modalStyleBox: {
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    width: "100%",
    maxHeight: "100%",
  },
  modalText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalButtonsPai: {
    flexDirection: "row",
    gap: 13,
  },
  buttonTextSave: {
    fontSize: 16,
    color: "#fff",
  },
  closeModalButtonSave: {
    padding: 10,
    marginTop: 20,
    color: "#000",
    backgroundColor: "#FFAA00",
  },
  closeModalButtonClose: {
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
