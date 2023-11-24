import styles from './App.module.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './global.css'

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Luan Vendt" 
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quasi qui repellendus dolores non, distinctio deleniti laudantium quis delectus incidunt voluptatibus molestias, iure dolor itaque. Maxime, suscipit totam? Ipsam, asperiores." 
        />
        <Post
          author="Giovana"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque distinctio provident a iusto amet laboriosam, voluptatem sint facere eius architecto fugit laborum, veritatis pariatur voluptates delectus iure veniam, perferendis quibusdam."
        />
        </main>
      </div>
    </div>
  )
}