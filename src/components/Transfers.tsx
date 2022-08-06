import { ticketsActions } from "../store/tickets";
import { useAppSelector, useAppDispatch } from "../hooks/use-store";
import CheckBox from "./CheckBox";
import classes from "./Transfers.module.css";
const Transfers = () => {
  const dispatch = useAppDispatch();
  const allFilters = useAppSelector((state) => state.tickets.allFilters);
  const isAllChecked = allFilters.every((el) => el.checked);
  const changeAllHandler = () => {
    dispatch(ticketsActions.setAllFilters(!isAllChecked));
  };
  return (
    <form>
      <h2>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <div className={classes.checkBox}>
        <input
          type="checkbox"
          id="all"
          name="all"
          checked={isAllChecked}
          onChange={changeAllHandler}
        />
        <label htmlFor="all">Все</label>
      </div>
      {allFilters.map((el) => {
        return <CheckBox key={Math.random()} filter={el} />;
      })}
    </form>
  );
};
export default Transfers;
