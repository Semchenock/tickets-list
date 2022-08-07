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
  const logoStyle = `${classes.logo} ${classes.buy__logo}`;
  const buttonStyle = `${classes.button} ${classes.buy__button}`;
  const locationStyle = `${classes.location} ${classes.info__location}`;
  const transfersStyle = `${classes.transfers} ${classes.info__transfers}`;
  return (
    <li key={Math.random()} className={classes.card}>
      <div className={classes.buy}>
        <img src={carrier} alt="TK" className={logoStyle} />
        <button className={buttonStyle}>Купить за {priceString}</button>
      </div>
      <div className={classes.info}>
        <div className={locationStyle}>
          <span className={classes.time}>{ticket.departure_time}</span>
          <span className={classes.place}>
            {ticket.origin}, {ticket.origin_name}
          </span>
          <span className={classes.date}>{departureDate}</span>
        </div>
        <div className={transfersStyle}>
          <span className={classes.label}>{transfers}</span>
          <div className={classes.arrow}>
            <hr className={classes.line} />
            <img src={plane} alt="plane" className={classes.plane} />
          </div>
        </div>
        <div className={locationStyle + " " + classes.location_align_right}>
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
