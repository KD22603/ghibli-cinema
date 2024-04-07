import React from 'react'
import ReservationCard from '../components/ReservationCard/ReservationCard';

const MyTickets = () => {
  return (
    <ReservationCard title={'First Movie'} numberOfTickets={3} totalPrice={2100} />
  )
}

export default MyTickets;