import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SingInButton() {
  const isUserLoggedIn = true

  return isUserLoggedIn ? (
    <>
      <button className={styles.singInButton} type='button'>
        <FaGithub color='#04D361' />
        Darlon Henrique
        <FiX color='#737380' className={styles.closeIcon} />
      </button>
    </>
  ) : (
    <>
      <button className={styles.singInButton} type='button'>
        <FaGithub color='#eba417' />
        Sing In With Github
      </button>
    </>
  )
}
