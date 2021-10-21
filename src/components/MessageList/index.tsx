import styles from './style.module.scss'
import { api } from '../../services/api';
import img from '../../assets/logo.svg'
import { useEffect, useState } from 'react';

type Message = {
    text: string;
    id: string;

    user: {
        name: string;
        avatar_url: string;
    }
}

export function MessageList() {

    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        api.get<Message[]>('latest_messages').then(response => {
            setMessages(response.data)
        })
    }, [])


    return (
        <div className={styles.messageWrapper}>
            <img src={img} alt="DoWhile 2021" />
            <ul className={styles.messageList}>

                {messages.map(message => {
                    return (
                        <li key={message.id} className={styles.message}>
                            <p className={styles.messageContent}>{message.text}</p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImage}>
                                    <img src={message.user.avatar_url} alt={message.user.name} />
                                </div>
                                <span>{message.user.name}</span>
                            </div>
                        </li>
                    )
                })
                }



            </ul>
        </div>
    )
}