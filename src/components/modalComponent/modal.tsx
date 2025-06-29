import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (data: { description: string; amount: number }) => void;
}

function ModalComponent({ visible, onClose, onSave }: ModalProps) {
  const handleSave = () => {
    onSave({ description: "", amount: 0 });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={() => onClose}
      transparent={false}
      animationType="slide"
    >
      <View style={styles.viewModal}>
        <View style={styles.modalStyleBox}>
          <Text style={styles.modalText}>Adicionar Transação</Text>
          <View style={styles.modalButtonsPai}>
            <TouchableOpacity
              style={styles.closeModalButtonSave}
              onPress={handleSave}
            >
              <Text style={styles.buttonTextSave}>Salvar transação</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeModalButtonClose}
              onPress={onClose}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalComponent;
