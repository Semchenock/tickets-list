import { useAppDispatch, useAppSelector } from "../hooks/use-store";
import { ticketsActions } from "../store/tickets";
import classes from "./Currency.module.css";
const Currency = () => {
  const dispatch = useAppDispatch();
  const shownCurrency = useAppSelector((state) => state.tickets.shownCurrency);
  const changeCurrencyHandler = (currency: string) => {
    dispatch(ticketsActions.changeShownCurrency(currency));
  };
  return (
    <>
      <h2 className={classes.header}>ВАЛЮТА</h2>
      <div className={classes.radio}>
        <button
          className={classes.button}
          onClick={changeCurrencyHandler.bind(null, "RUB")}
          disabled={shownCurrency === "RUB"}
        >
          RUB
        </button>
        <button
          className={classes.button}
          onClick={changeCurrencyHandler.bind(null, "USD")}
          disabled={shownCurrency === "USD"}
        >
          USD
        </button>
        <button
          className={classes.button}
          onClick={changeCurrencyHandler.bind(null, "EUR")}
          disabled={shownCurrency === "EUR"}
        >
          EUR
        </button>
      </div>
    </>
  );
};
export default Currency;
