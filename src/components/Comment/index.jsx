import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        image="https://github.com/diego3g.png"
        textoAlternativo="imagem de quem comentou"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luis Felipe</strong>
              <time title="05 de Junho as 11:01" dateTime="2022-05-11 11:01:30">
                Cerca de 1hr Atrás
              </time>
            </div>

            <button className={styles.buttonDelete} title="Deletar Comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom devon, parabéns !! 🤲🤲🤲</p>
        </div>
        <footer>
          <button className={styles.buttonAplaudir}>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
