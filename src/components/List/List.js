import styles from './List.module.scss'
const List = () => {
    return (
      <div className={styles.list}>
        <header className={styles.header}>
            <h2 className={styles.title}>Things to do<span>soon</span></h2>
            <p className={styles.description}>Interesting things I want to check out</p>
        </header>
        <section className={styles.columns}>
          <article>
            <h1>Books</h1>
          </article>
          <article>
            <h1>Movies</h1>
          </article>
          <article>
            <h1>Games</h1>
          </article>
        </section>
      </div>
    );
  };

  export default List;