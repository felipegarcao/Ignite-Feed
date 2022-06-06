import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar
            image="https://avatars.githubusercontent.com/u/78617974?v=4"
            textoAlternativo="perfil"
          />
          <div className={styles.authorInfo}>
            <strong>Luis Felipe</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="05 de Junho as 11:01" dateTime="2022-05-11 11:01:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Galeraaa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da rocketseat
        </p>

        <p>
          <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
