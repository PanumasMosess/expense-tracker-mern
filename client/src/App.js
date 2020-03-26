import React from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Blance } from "./components/Blance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobleProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobleProvider>
      <Header />
      <div className="container">
        <Blance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobleProvider>
  );
}

export default App;
