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
      ? `${classes.active} ${classes.radioButton}`
      : classes.radioButton;
  const USDStyle =
    shownCurrency === "USD"
      ? `${classes.active} ${classes.radioButton}`
      : classes.radioButton;
  const EURStyle =
    shownCurrency === "EUR"
      ? `${classes.active} ${classes.radioButton}`
      : classes.radioButton;

  return (
    <>
      <h2>ВАЛЮТА</h2>
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
