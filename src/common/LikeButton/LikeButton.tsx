import { HeartOutlined } from '@ant-design/icons'
import styles from './LikeButton.module.css'
interface Props {
    onClick?: VoidFunction;
}const LikeButton:React.FC<Props> = ({onClick}) => {
  return (
  <button className={styles.heartButton}  onClick={onClick}> <HeartOutlined
  className={styles.heartOutlined}/> </button>
  )
}
export default LikeButton;