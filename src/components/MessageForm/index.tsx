import { useContext, useState, FormEvent } from 'react';
import { VscGithub, VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';
import styles from './style.module.scss'
export function SendMessage() {
    const { user, signOut } = useContext(AuthContext);

    const [message, setMessage] = useState('')

    async function handleMessage(event: FormEvent) {
        event.preventDefault();
        if (!message.trim()) {
            return;
        }

        await api.post('messages', { message })
        setMessage('')
    }

    return (
        <div className={styles.boxMessageWrapper}>
            <button onClick={signOut} className={styles.btnSignOut}>
                <VscSignOut size="32" />
            </button>
            <header className={styles.userInfo}>
                <div className={styles.userIMG}>
                    <img src={user?.avatar_url} alt={user?.name} />
                </div>
                <strong className={styles.userName}>{user?.name}</strong>
                <span className={styles.userGitHub}>
                    <VscGithub size="20" />
                    {user?.login}
                </span>
            </header>
            <form onSubmit={handleMessage} className={styles.messageForm}>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Enter Your Text Here"
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}