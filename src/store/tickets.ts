import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./index";
import tickets from "../assets/json/tickets.json";
// import Ticket from "../models/ticket";

const allTickets = tickets.tickets.map((ticket) => {
  return { ...ticket, id: Math.random() };
});
const allTransfers = allTickets.map((ticket) => ticket.stops);
const allFilters = Array.from(new Set(allTransfers))
  .sort((a, b) => {
    return a > b ? 1 : b > a ? -1 : 0;
  })
  .map((transfers) => {
    return { transfers, checked: true };
  });
const initialState = {
  allTickets,
  allFilters,
  shownCurrency: "RUB",
};
const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setAllFilters(state, action: PayloadAction<boolean>) {
      state.allFilters = state.allFilters.map((filter) => {
        return { ...filter, checked: action.payload };
      });
    },
    setSingleFilter(state, action: PayloadAction<number>) {
      const changedInd = state.allFilters.findIndex(
        (filter) => filter.transfers === action.payload
      );
      state.allFilters = state.allFilters.map((filter) => {
        return { ...filter, checked: false };
      });
      state.allFilters[changedInd].checked = true;
    },
    changeFilter(state, action: PayloadAction<number>) {
      const changedInd = state.allFilters.findIndex(
        (filter) => filter.transfers === action.payload
      );
      state.allFilters[changedInd].checked =
        !state.allFilters[changedInd].checked;
    },
    changeShownCurrency(state, action: PayloadAction<string>) {
      state.shownCurrency = action.payload;
    },
  },
});
export const ticketsActions = ticketsSlice.actions;
// export const selectAllTodos = (state: RootState) => state.tickets.allTickets;
export default ticketsSlice.reducer;
