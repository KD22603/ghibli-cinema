import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react'
import styles from './CharacterCard.module.css'
import { useNavigate } from 'react-router-dom';
interface Props {
    id:string;
    title:string;
    original_title:string;
    image:string;
}

const CharacterCard:React.FC<Props> = ({
  id,
    title,
    original_title,
    image,
}) => {

const navigate = useNavigate();
const navigateCard = () =>{
  navigate(`/browse/${id}`);
  navigate(0);
}
  return (
    <Card
    onClick={navigateCard}
    className={styles.characterCard}
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={image} />}
  >
    <Meta title={`${title} (${original_title})`} />
  </Card>
);
}

export default CharacterCard;