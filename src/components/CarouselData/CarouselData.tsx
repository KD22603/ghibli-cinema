import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './CarouselData.module.css'

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
    <button className={styles.carouselButton}>Buy tickets!</button>
</div>
<div>
    <img className={styles.carouselImage}src={image} alt="" />
</div>
</div>
  )
}

export default CarouselData
