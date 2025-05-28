import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CustumButtonProps {
  title: string;
  onPress: () => void;
}

const CusttonButton: React.FC<CustumButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonTouchableOpacity}>
      <Text style={[styles.buttonText]} onPress={onPress}>
        {title}
      </Text>
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
