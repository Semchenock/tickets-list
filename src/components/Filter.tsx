import Currency from "./Currency";
import Transfers from "./Transfers";
import classes from "./Filter.module.css";
const Filter = () => {
  return (
    <aside className={`${classes.desktop} ${classes.card}`}>
      <Currency />
      <Transfers />
    </aside>
  );
};
export default Filter;
