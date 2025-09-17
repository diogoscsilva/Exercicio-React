import styles from "./Skeleton.module.css"
import productStyles from "./ProductCard.module.css"
import { useTheme } from "../ThemeContext";

export function SkeletonCard() {
  const dark = useTheme().theme === 'dark' ? true : false
  return (
    <div className={productStyles.card + ' ' + (dark ? productStyles["dark-card"] + ' ' + styles["dark-card"] : styles.card)} >
      <div className={productStyles['image-container']  + ' ' +  styles.skeleton }></div>
      <div className={productStyles.content} >
        <div className={styles.skeleton  + ' ' +  styles.line   + ' ' +  styles["w-80"]} />
        <div className={styles.skeleton  + ' ' +  styles.line   + ' ' +  styles["w-50"]} />
        <div className={styles.skeleton  + ' ' +  styles.line   + ' ' +  styles["w-30"]} />
        <div className={styles.skeleton  + ' ' +  styles.line   + ' ' +  styles["w-70"]} />
      </div>
    </div>
  );
}