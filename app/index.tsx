import CusttonButton from "@/src/components/CusttonButton";
import { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface TransactionTypes {
  id: string;
  description: string;
  amount: number;
}

const transactions: TransactionTypes[] = [
  { id: "1", description: "Supermercado", amount: -50.75 },
  { id: "2", description: "Salário", amount: 2500.0 },
  { id: "3", description: "Restaurante", amount: -120.4 },
  { id: "4", description: "Aluguel", amount: -800.0 },
];

export default function Index() {
  const name = "Ryan";

  // Calculo saldo total
  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);

  //Estado Modal:
  const [openModal, setOpenModal] = useState(false);

  const functionModalOpen = () => {
    setOpenModal(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo-financas.png")}
        style={styles.logo}
      />
      <Text style={styles.greeting}>Olá, {name}!</Text>

      <Text style={styles.greeting}>Saldo Atual</Text>
      <Text style={styles.balance}>
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(totalAmount)}
      </Text>

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={functionModalOpen}>
          <Text style={styles.buttonText}>Adicionar receita</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={functionModalOpen}>
          <Text style={styles.buttonText}>Adicionar despesas</Text>
        </Pressable>
      </View>

      <Modal visible={openModal}>
        <View>
          <Text>Olá Modal</Text>
        </View>
      </Modal>

      <Text style={styles.sectionTitle}>Transações Recentes</Text>
      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transactionItem}>
          <Text style={styles.transactionText}>{transaction.description}</Text>
          <Text
            style={[
              styles.transactionAmount,
              transaction.amount < 0 ? styles.expense : styles.income,
            ]}
          >
            {transaction.amount.toFixed(2)}
          </Text>
        </View>
      ))}

      {/* <Button title="botão ryan" onPress={() => alert("Você clicou")} /> */}

      <CusttonButton
        title="Toque CustomButton"
        onPress={() => alert("voce pressionou")}
      />

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#133d13" : "#89ff00" },
        ]}
        onPress={() => alert("pressionado")}
      >
        <Text>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginHorizontal: "auto",
  },
  greeting: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
  },
  balance: {
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 20,
    color: "#FFAA00",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#89ff00",
    borderRadius: 10,
    elevation: 2,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: 700,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  transactionItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 12,
  },
  transactionText: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "700",
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
  buttonTouchableOpacity: {
    backgroundColor: "blue",
    borderRadius: 30,
    padding: 10,
  },
});
