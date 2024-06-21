import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://s2.glbimg.com/pPmizZbZCPyoT-k1LAxqM3ltL3M=/620x430/e.glbimg.com/og/ed/f/original/2020/05/13/gettyimages-1169568782.jpg"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/nathanafacion.png" />

        <strong>Nathana Facion</strong>
        <span>Desenvolvedora</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
