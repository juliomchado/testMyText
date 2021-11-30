import type { NextPage } from 'next'

import styles from './styles.module.scss';
import { DoneRounded } from '@material-ui/icons';

const Home: NextPage = () => {
  return (
    <main className={styles.content}>
      <h1>Teste se seu texto está correto</h1>
      <h2>Basta escrever seu texto e se você quiser conserta-la, clique no botão de corrigir</h2>

      <section className={styles.textSection}>
        {/* <p className={styles.correctText}>Está correto <DoneRounded /></p> */}
        {/* <p className={styles.wrongText}>Contém um erro </p> */}

        <textarea
          className={styles.textArea}
          placeholder='Digite o seu texto aqui....'
        />
      </section>
    </main>
  )
}

export default Home
