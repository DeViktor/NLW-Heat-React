import styles from './style.module.scss'

import img from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageWrapper}>
            <img src={img} alt="DoWhile 2021" />
            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}> minha incrivel jiromba</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/DeViktor.png" alt="Farinhas Farinhoso" />
                        </div>
                        <span>Farinhas Farinhoso</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}> minha incrivel jiromba</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/DeViktor.png" alt="Farinhas Farinhoso" />
                        </div>
                        <span>Farinhas Farinhoso</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}> minha incrivel jiromba</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/DeViktor.png" alt="Farinhas Farinhoso" />
                        </div>
                        <span>Farinhas Farinhoso</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}