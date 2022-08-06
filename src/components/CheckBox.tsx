import classes from "./Transfers.module.css";
import sklonenie from "../hooks/sklonenie";
import { useAppDispatch } from "../hooks/use-store";
import Filter from "../models/filter";
import { ticketsActions } from "../store/tickets";
const CheckBox: React.FC<{ filter: Filter }> = (props) => {
  const dispatch = useAppDispatch();
  const amount = props.filter.transfers;
  const changeHandler = (amount: number) => {
    dispatch(ticketsActions.changeFilter(amount));
  };
  const setSingleHandler = (amount: number) => {
    dispatch(ticketsActions.setSingleFilter(amount));
  };
  return (
    <div className={classes.checkBox}>
      <div>
        <input
          type="checkbox"
          id={`${amount}`}
          name="transfer"
          checked={props.filter.checked}
          onChange={changeHandler.bind(null, amount)}
        />
        <label htmlFor={`${amount}`}>
          {amount === 0
            ? "Без пересадок"
            : `${amount} ${sklonenie(amount, [
                "пересадка",
                "пересадки",
                "пересадок",
              ])}`}
        </label>
      </div>
      <button
        onClick={setSingleHandler.bind(null, amount)}
        className={classes.hide}
      >
        ТОЛЬКО
      </button>
    </div>
  );
};
export default CheckBox;
