import { createSlice } from '@reduxjs/toolkit';

const initialExpensesState = {
  expenses: [],
  totalAmount: 0,
  showPremiumButton: false
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: initialExpensesState,
  reducers: {
    addExpense(state, action) {
      state.expenses.push(action.payload);
      state.totalAmount += action.payload.amount;
      state.showPremiumButton = state.totalAmount > 10000;
    },
    fetchExpenses(state, action) {
      state.expenses = action.payload.expenses;
      state.totalAmount = action.payload.totalAmount;
      state.showPremiumButton = action.payload.totalAmount > 10000;
    }
  }
});

export const expensesActions = expensesSlice.actions;

export default expensesSlice.reducer;
