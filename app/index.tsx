import { Image, Text, View } from "react-native";

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
    <View>
      <Image source={require("@/assets/images/logo-finance.png")} />
      <Text>Olá, {name}</Text>

      <Text>Saldo Atual</Text>
      <Text>
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(totalAmount)}
      </Text>

      <View>
        <Text>Adicionar receita</Text>
        <Text>Adicionar despesas</Text>
      </View>

      {transactions.map((transaction) => (
        <View key={transaction.id}>
          <Text>{transaction.description}</Text>
          <Text>{transaction.amount.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
}
