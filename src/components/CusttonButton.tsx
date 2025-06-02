import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CusttonButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonTouchableOpacity} onPress={onPress}>
      <Text style={[styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTouchableOpacity: {
    backgroundColor: "blue",
    borderRadius: 30,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: 700,
  },
});

export default CusttonButton;
