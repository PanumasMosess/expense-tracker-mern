import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data
      });
    } catch (err) {}
  }

  function deleteTransection(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransection(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransection,
        addTransection
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
