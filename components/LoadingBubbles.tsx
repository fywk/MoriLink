import styles from "./LoadingBubbles.module.css";

export default function Loading() {
  return (
    <div className="flex size-full items-center justify-center">
      <div className="relative size-12.5">
        {[...Array<undefined>(8)].map((_, i) => (
          <div className={styles.dot} key={i}></div>
        ))}
      </div>
    </div>
  );
}
