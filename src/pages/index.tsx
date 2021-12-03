import type { NextPage } from 'next'

import styles from './styles.module.scss';
import { DoneRounded } from '@material-ui/icons';
import { FormEvent, useState } from 'react';

const Home: NextPage = () => {
  const [text, setText] = useState('');


  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (text.trim() === '') {
      return;
    }

    console.log(text)
  }



  return (
    <main className={styles.content}>
      <h1>Teste se seu texto está correto</h1>
      <h2>Basta escrever seu texto e se você quiser conserta-la, clique no botão de verificar</h2>

      <section className={styles.textSection}>
        {/* <p className={styles.correctText}>Está correto <DoneRounded /></p> */}
        {/* <p className={styles.wrongText}>Contém um erro </p> */}

        <form onSubmit={handleSubmit} className={styles.textAreaContainer}>
          <textarea
            className={styles.textArea}
            placeholder='Digite o seu texto aqui....'
            value={text}
            onChange={e => setText(e.target.value)}
          />

          <button>Verificar</button>
        </form>
        {/* <div className={styles.errorsSection}>
          <h4 className={styles.errorMessage}>Possible spelling mistake found.</h4>
        </div>

        <p className={styles.suggests}><span>Sugestôes:</span> interesting, asdas, asdas, adsa, adssasa </p> */}
      </section>
    </main>
  )
}

export default Home


