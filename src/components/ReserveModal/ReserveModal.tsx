import { Modal } from 'antd';
import { useState } from 'react'
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';

const ReserveModal = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [numberOfTickets, setNumberOfTickets] = useState(1);
 const navigate = useNavigate()

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate('/browse')
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <Button label='Reserve Ticket' onClick={showModal}/>
      <Modal title="New Reservation" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        Number Of Tickets : <input type="number" min={1} max={5}
        value={numberOfTickets}
        onChange={(e) => setNumberOfTickets(Number(e.target.value))}    
        />
      </Modal>
    </>
  );
};

export default ReserveModal