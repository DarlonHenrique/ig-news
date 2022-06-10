import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn } from 'next-auth/react'

import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true

  return isUserLoggedIn ? (
    <>
      <button className={styles.signInButton} type='button'>
        <FaGithub color='#04D361' />
        Darlon Henrique
        <FiX color='#737380' className={styles.closeIcon} />
      </button>
    </>
  ) : (
    <>
      <button
        className={styles.signInButton}
        type='button'
        onClick={() => signIn('github')}
      >
        <FaGithub color='#eba417' />
        sign In With Github
      </button>
    </>
  )
}
