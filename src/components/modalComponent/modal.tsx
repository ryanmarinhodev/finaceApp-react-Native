import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

function ModalComponent({ visible, onClose }: ModalProps) {
  const handleSave = () => {
    alert("Salvo com sucesso!");
    onClose();
  };

  return (
    <Modal visible={visible} onRequestClose={() => onClose} transparent={true}>
      <View style={styles.viewModal}>
        <View style={styles.modalStyleBox}>
          <Text style={styles.modalText}>Modal Aberto</Text>
          <Text style={styles.modalParagraph}>Parágrafo do modal</Text>
          <View style={styles.modalButtonsPai}>
            <TouchableOpacity style={styles.closeModalButton} onPress={onClose}>
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
