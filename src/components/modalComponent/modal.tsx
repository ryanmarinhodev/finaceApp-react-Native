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
    <Modal visible={visible} onRequestClose={() => onClose} transparent={true}>
      <View style={styles.viewModal}>
        <View style={styles.modalStyleBox}>
          <Text style={styles.modalText}>Modal Aberto</Text>
          <Text style={styles.modalParagraph}>Parágrafo</Text>
          <View style={styles.modalButtonsPai}>
            <TouchableOpacity style={styles.closeModalButton}>
              <Text style={styles.modalButtonText} onPress={handleSave}>
                Salvar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeModalButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalComponent;
