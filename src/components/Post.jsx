import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/MarceloHBoff.png" />
          <div className={styles.authorInfo}>
            <strong>MarceloHBoff</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 08:13h" dateTime="2024-06-29 18:05:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>É os guri do grêmio</p>
        <p>Não tem como</p>
        <p>
          Projetin felas{" "}
          <a href="https://github.com/MarceloHBoff">github.com/MarceloHBoff</a>
        </p>
        <p>
          <a href="">#Sextou </a>
          <a href="">#SóPeloGole </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um cometário aqui" />
        <footer>
          <button type="submit">Publicar</button>
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
