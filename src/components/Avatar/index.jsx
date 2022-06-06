import styles from "./avatar.module.css";

export function Avatar({ image, textoAlternativo, hasBorder = true }) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={image} alt={textoAlternativo} />
  )
  
}
