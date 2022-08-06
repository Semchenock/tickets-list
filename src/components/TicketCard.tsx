import Ticket from "../models/ticket";
import sklonenie from "../hooks/sklonenie";
import formatDate from "../hooks/format-date";
import { useAppSelector } from "../hooks/use-store";
import classes from "./TicketCard.module.css";
import plane from "../assets/img/plane.png";
import TK from "../assets/img/TK.png";
import BA from "../assets/img/BA.png";
import S7 from "../assets/img/S7.png";
import SU from "../assets/img/SU.png";

const TicketCard: React.FC<{ data: Ticket }> = (props) => {
  const ticket = props.data;
  let carrier: string;
  switch (ticket.carrier) {
    case "TK":
      carrier = TK;
      break;
    case "BA":
      carrier = BA;
      break;
    case "S7":
      carrier = S7;
      break;
    case "SU":
      carrier = SU;
      break;
    default:
      carrier = "";
  }

  const currency = useAppSelector((state) => state.tickets.shownCurrency);
  let priceString: string;
  switch (currency) {
    case "RUB":
      priceString = `${ticket.price.toLocaleString()} ₽`;
      break;
    case "USD":
      priceString = `${(ticket.price * 0.0166).toLocaleString()} $`;
      break;
    case "EUR":
      priceString = `${(ticket.price * 0.0164).toLocaleString()} €`;
      break;
    default:
      priceString = `${ticket.price.toLocaleString()} ₽`;
  }
  const transfers =
    ticket.stops === 0
      ? "БЕЗ ПЕРЕСАДОК"
      : `${ticket.stops} ${sklonenie(ticket.stops, [
          "ПЕРЕСАДКА",
          "ПЕРЕСАДКИ",
          "ПЕРЕСАДОК",
        ])}`;
  const departureDate = formatDate(ticket.departure_date);
  const arrivalDate = formatDate(ticket.arrival_date);
  return (
    <li key={Math.random()} className={classes.card}>
      <div className={classes.buy}>
        <img src={carrier} alt="TK" />
        <button>Купить за {priceString}</button>
      </div>
      <div className={classes.info}>
        <div className={classes.departure}>
          <span className={classes.time}>{ticket.departure_time}</span>
          <span className={classes.place}>
            {ticket.origin}, {ticket.origin_name}
          </span>
          <span className={classes.date}>{departureDate}</span>
        </div>
        <div className={classes.transfers}>
          <span>{transfers}</span>
          <div className={classes.transferDecoration}>
            <hr />
            <img src={plane} alt="plane" />
          </div>
        </div>
        <div className={classes.arrival}>
          <span className={classes.time}>{ticket.arrival_time}</span>
          <span className={classes.place}>
            {ticket.destination_name}, {ticket.destination}
          </span>
          <span className={classes.date}>{arrivalDate}</span>
        </div>
      </div>
    </li>
  );
};
export default TicketCard;
