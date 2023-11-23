import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'

export function App() {
  return (
    <div>
      <Header></Header>

      <Post 
        author="Luan Vendt" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quasi qui repellendus dolores non, distinctio deleniti laudantium quis delectus incidunt voluptatibus molestias, iure dolor itaque. Maxime, suscipit totam? Ipsam, asperiores." 
      />
      <Post
      author="Giovana"
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque distinctio provident a iusto amet laboriosam, voluptatem sint facere eius architecto fugit laborum, veritatis pariatur voluptates delectus iure veniam, perferendis quibusdam."
      />
    </div>
  )
}