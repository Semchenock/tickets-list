import { useAppDispatch, useAppSelector } from "../hooks/use-store";
import { ticketsActions } from "../store/tickets";
import classes from "./Currency.module.css";
const Currency = () => {
  const dispatch = useAppDispatch();
  const shownCurrency = useAppSelector((state) => state.tickets.shownCurrency);
  const changeCurrencyHandler = (currency: string) => {
    dispatch(ticketsActions.changeShownCurrency(currency));
  };
  const RUBStyle =
    shownCurrency === "RUB"
      ? `${classes.button_active} ${classes.button}`
      : classes.button;
  const USDStyle =
    shownCurrency === "USD"
      ? `${classes.button_active} ${classes.button}`
      : classes.button;
  const EURStyle =
    shownCurrency === "EUR"
      ? `${classes.button_active} ${classes.button}`
      : classes.button;

  return (
    <>
      <h2 className={classes.header}>ВАЛЮТА</h2>
      <div className={classes.radio}>
        <button
          className={RUBStyle}
          onClick={changeCurrencyHandler.bind(null, "RUB")}
        >
          RUB
        </button>
        <button
          className={USDStyle}
          onClick={changeCurrencyHandler.bind(null, "USD")}
        >
          USD
        </button>
        <button
          className={EURStyle}
          onClick={changeCurrencyHandler.bind(null, "EUR")}
        >
          EUR
        </button>
      </div>
    </>
  );
};
export default Currency;
