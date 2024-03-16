import { Button } from 'antd';
import styles from './PageSocialMedia.module.css'
import { DiscordOutlined, FacebookOutlined, InfoCircleOutlined, InstagramOutlined, TikTokOutlined } from '@ant-design/icons';

const PageSocialMedia = () => {
  return (
    <div className={styles.container}>
        <p className={styles.info}> <InfoCircleOutlined />  If you enjoy the website, please consider sharing it with your friends. Thank you! </p>
        <div className={styles.buttonContainer}>
        <Button className={styles.facebookButton} type="primary" icon={<FacebookOutlined />}>
        Facebook
      </Button>
      <Button className={styles.instagramButton} type="primary" icon={<InstagramOutlined />}>
        Instagram
      </Button>
      <Button className={styles.discordButton} type="primary" icon={<DiscordOutlined />}>
        Discord Server
      </Button>
      <Button className={styles.tiktokButton} type="primary" icon={<TikTokOutlined />}>
        TikTok
      </Button>
      </div>
    </div>
  )
}

export default PageSocialMedia;