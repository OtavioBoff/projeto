import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/MarceloHBoff.png",
      name: "Marcelo H Boff",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "É os guri do grêmio" },
      { type: "paragraph", content: "Não tem como" },
      { type: "paragraph", content: "Projetin felas" },
      {
        type: "link",
        src: "https://github.com/MarceloHBoff",
        content: "github.com/MarceloHBoff",
      },
      { type: "link", src: "#", content: "#Sextou" },
      { type: "link", src: "#", content: "#SóPeloGole" },
    ],
    publishedAt: new Date("2024-06-30 12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Maykbrito.png",
      name: "Maykão",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "É os guri do grêmio" },
      { type: "paragraph", content: "Não tem como" },
      { type: "paragraph", content: "Projetin felas" },
      {
        type: "link",
        src: "https://github.com/maykbrito",
        content: "github.com/maykbrito",
      },
      { type: "link", src: "#", content: "#Sextou" },
      { type: "link", src: "#", content: "#SóPeloGole" },
    ],
    publishedAt: new Date("2024-06-29 12:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
