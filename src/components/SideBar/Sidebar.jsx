
import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar(){
  return (
    <div className={styles.sidebar}>
      <img className={styles.cover} src="https://s3-sa-east-1.amazonaws.com/prod-jobsite-files.kenoby.com/uploads/sistemaunimed-1617905172-logo-01png.png" />

      <div className={styles.profile}>
        <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/78617974?v=4' />

        <strong>Luis Felipe</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> 
          Editar Seu Perfil
        </a>
      </footer>
    </div>
  )
}