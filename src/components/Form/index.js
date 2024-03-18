import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";
import { toast } from "sonner";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const [, setTransactionDate] = useState(""); // Estado para armazenar a data e hora da transação

  // Função para formatar a data e hora atual
  const formatDate = () => {
    const date = new Date();
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    return formattedDate;
  };

  const handleSave = () => {
    if (!desc || !amount) {
      toast.error('Informe a descrição e o valor!');
      return;
    } else if (amount < 1) {
      toast.error('O valor tem que ser positivo!');
      return;
    }

    if (isExpense) {
      // Calcula o saldo atual da conta
      const currentBalance = transactionsList.reduce((acc, transaction) => {
        if (!transaction.expense) {
          return acc + parseFloat(transaction.amount);
        } else {
          return acc - parseFloat(transaction.amount);
        }
      }, 0);

      // Verifica se há saldo suficiente para a nova transação de saída
      if (parseFloat(amount) > currentBalance) {
        alert("Saldo insuficiente para realizar esta transação de saída!");
        return;
      }
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
      transactionDate: formatDate(),
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setTransactionDate("");
    toast.success("Transação realizada com sucesso!");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
