import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa';

export function LoginBox() {
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Enter and Share</strong>
            <a href="" className={styles.signIn}>
                <FaGithub size="22" />
                Sign In With GitHub
            </a>
        </div>
    )
}