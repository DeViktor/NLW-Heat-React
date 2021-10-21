import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';


export function LoginBox() {

    const { signInUrl, user } = useContext(AuthContext);
    console.log(user)
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Enter and Share</strong>
            <a href={signInUrl} className={styles.signIn}>
                <FaGithub size="22" />
                Sign In With GitHub
            </a>
        </div>
    )
}