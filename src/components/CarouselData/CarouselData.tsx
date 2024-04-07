import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './CarouselData.module.css'
import Button from '../../common/Button/Button';

interface Props {
    id:string;
    title:string;
    original_title:string;
    image:string;
    description:string;
}

const CarouselData:React.FC<Props> = ({
    title,
    original_title,
    image,
    description,
}) => {
  return (
    <div className={styles.container}>
<div>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.details}><ShoppingCartOutlined />{original_title}</p>
    <p className={styles.details}>{description}</p>
    <Button label='Buy Tickets!'/>
</div>
<div>
    <img className={styles.carouselImage}src={image} alt="" />
</div>
</div>
  )
}

export default CarouselData
