import styles from './App.module.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './global.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/LuanVendt.png',
            name: 'Luan Vendt',
            role: 'Estagiário',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            { type: 'link', content: 'jane.design/doctorcare' }, 
        ],
        publishedAt: new Date('2023-11-27 17:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/giovanademiranda.png',
            name: 'Giovana Miaranda',
            role: 'Estagiária',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            { type: 'link', content: 'jane.design/doctorcare' }, 
        ],
        publishedAt: new Date('2023-11-28 17:00:00'),
    },
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
            return (
                <Post
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                />
            )
        })}
        </main>
      </div>
    </div>
  )
}