import { useContext } from 'react'
import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { SendMessage } from './components/MessageForm'
import { MessageList } from './components/MessageList'
import { AuthContext } from './contexts/auth'
export function App() {

  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''} `}>
      <MessageList />
      {!!user ? <SendMessage /> : <LoginBox />}
    </main>

  )
}
