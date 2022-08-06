import TicketCard from "./TicketCard";
import { useAppSelector } from "../hooks/use-store";
import classes from "./TicketsList.module.css";
const TicketsList = () => {
  const allTickets = useAppSelector((state) => state.tickets.allTickets);
  const allFilters = useAppSelector((state) => state.tickets.allFilters);
  const shownFilters = allFilters
    .filter((filter) => filter.checked)
    .map((filter) => filter.transfers);
  const shownTickets = allTickets
    .filter((ticket) => shownFilters.includes(ticket.stops))
    .sort((a, b) => {
      return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
    });
  return (
    <ul className={classes.ticketsList}>
      {shownTickets.map((ticket) => {
        return <TicketCard key={ticket.id} data={ticket} />;
      })}
    </ul>
  );
};
export default TicketsList;
