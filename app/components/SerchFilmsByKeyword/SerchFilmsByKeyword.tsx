import styles from "./SerchFilmsByKeyword.module.css";

export const SerchFilmsByKeyword = () => {
  return (
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
  );
};
