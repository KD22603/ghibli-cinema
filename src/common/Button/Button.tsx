import styles from './Button.module.css'
interface Props{
    label:string;
    onClick?:VoidFunction;
}
const Button:React.FC<Props> = ({label,onClick}) => {
  return (
    <button className={styles.carouselButton} onClick={onClick} >{label}</button>
  )
}

export default Button