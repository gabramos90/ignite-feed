import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1506878206813-92402b8ded23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2ZWxvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=50" 
      />

      <div className={styles.profile}>
        <Avatar 
          src="https://github.com/Tharlys10.png"
        />

        <strong>Tharlys Alves</strong>
        <span>Developer Full Stack</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}