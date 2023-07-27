import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__wrap}>
          <a href="/" className={styles.logo}>
            {/* <svg className={styles.logo__img}>
              <use
                className={styles.logo__icon}
                // href="./images/sprite.svg#icon-film"
                href="#"
              ></use>
            </svg> */}
            <span className={styles.logo__name}>Filmoteka</span>
          </a>

          <nav className={styles.header__nav}>
            <a href="/" className={styles.header__link}>
              home
            </a>
            <a href="/" className={styles.header__link}>
              my library
            </a>
          </nav>
        </div>

        <form className={styles.header__form}>
          <input
            className={styles.header__input}
            type="text"
            name="keyword"
            placeholder="Movie search"
            autoComplete="off"
          />

          <button className={styles.header__search} type="submit">
            <svg className={styles.header__search_icon}>
              {/* <use href="./images/sprite.svg#icon-search"></use> */}
              <use href="#"></use>
            </svg>
          </button>
        </form>

        <div className={styles.eror__wrap}>
          {/* <!-- для вiдображення достатньо прибрати клас "header__error_hidden" --> */}
          {/* <p className="header__error header__error_hidden"> */}
          <p className={styles.header__error_hidden}>
            Search result is not successful.
            <br />
            Enter the correct movie name and search again.
          </p>
        </div>
      </div>
    </header>
  );
};
