import { Image, StyleSheet, Text, View } from "react-native";

const transactions = [
  { id: "1", description: "Supermercado", amount: -50.75 },
  { id: "2", description: "Salário", amount: 2500.0 },
  { id: "3", description: "Restaurante", amount: -120.4 },
  { id: "4", description: "Aluguel", amount: -800.0 },
];

export default function Index() {
  const name = "ryan";

  // Calculo saldo total
  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo-finance.png")}
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
        <Text style={styles.button}>Adicionar receita</Text>
        <Text style={styles.button}>Adicionar despesas</Text>
      </View>

      <Text style={styles.sectionTitle}>Transações Recentes</Text>
      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transactionItem}>
          <Text style={styles.transactionText}>{transaction.description}</Text>
          <Text style={styles.transactionAmount}>
            {transaction.amount.toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#545454",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
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
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2c5f30",
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
});
