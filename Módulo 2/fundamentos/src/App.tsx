import { Header } from './components/Header';
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/nathanafacion.png',
      name: 'Nathana Facion',
      role: 'Desenvolvedora - Venturus'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Exemplo de comentário 1 🚀' },
    ],
    publishedAt: new Date('2024-06-19 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/nathanafacion.png',
      name: 'Nathana Facion',
      role: 'Desenvolvedora - Venturus'
    },
    content: [
      { type: 'paragraph', content: 'Segue a Nath' },
      { type: 'paragraph', content: 'Me sigam no twitter' },
      { type: 'link', content: 'https://x.com/lombrigaofcode' },
    ],
    publishedAt: new Date('2024-06-19 20:30:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
