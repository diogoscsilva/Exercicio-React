import { useTheme } from "../ThemeContext";
import styles from "./CardButton.module.css"

export function CardButton ({className = "", aria = ""}) {
  const dark = useTheme().theme === 'dark' ? true : false
  return <button className={styles.button + ' ' + (dark ? styles["dark-button"] : '') + className} aria-label={aria} >
        Comprar
  </button>
}