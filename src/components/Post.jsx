import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/111096073?v=4" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Luan Vendt</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='24 de Novembro às 16:18h' dateTime='20220-05-11 16:17:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 {' '}<a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '} {/* Forma de colocar espaço sem ser pelo CSS */}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>
        </article>
    )
}