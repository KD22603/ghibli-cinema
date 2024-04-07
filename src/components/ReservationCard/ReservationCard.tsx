import { Card } from 'antd'
import styles from './ReservationCard.module.css'
interface Props{
    title:string;
    numberOfTickets:number;
    totalPrice:number;
}
const ReservationCard:React.FC<Props> = ({
    title,
    numberOfTickets,
    totalPrice
}) => {
  return (
<Card title={title}>
      <p>Number of Tickets: {numberOfTickets}</p>
      <p>Total Price : {totalPrice}</p>
  </Card>  
  )
}

export default ReservationCard