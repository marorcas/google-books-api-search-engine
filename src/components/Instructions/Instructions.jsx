import styles from "./Instructions.module.scss"

const Instructions = () => {
    return (
        <article className={styles.Book}>
            <div className={styles.LeftPage}>
                <p className={styles.Title}>Welcome to Books Search</p>
                <p className={styles.Para}>This is a website where you can search up any books that you like and find out more information about them.</p>
            </div>

            <div className={styles.RightPage}>
                <p className={styles.Title}>How to use this website</p>
                <ul className={styles.Para}>
                    <li>Use the search bar to look for a book</li>
                    <li>You can search books by title, author, or topic</li>
                    <li>When you are taken to the results page, click on a book card to find out further information about that book</li>
                </ul>
            </div>
      </article>
    )
}

export default Instructions