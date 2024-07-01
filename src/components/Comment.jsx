import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({
  author = {
    avatarSrc: "https://github.com/diego3g.png",
    name: "Diego Fernandes",
  },
  content,
  onDeleteComment,
}) {
  const [likeCont, setLikeCont] = useState(0);

  function handleLikeComment() {
    setLikeCont(likeCont + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatarSrc} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title="11 de Maio às 08:13h" dateTime="2024-06-29 18:05:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCont}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
