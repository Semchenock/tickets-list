import Filter from "./components/Filter";
import TicketsList from "./components/TicketsList";
import classes from "./App.module.css";
function App() {
  return (
    <main className={classes.container}>
      <Filter />
      <TicketsList />
    </main>
  );
}

export default App;
