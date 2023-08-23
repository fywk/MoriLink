import styles from "./LoadingBubbles.module.css";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-[50px] w-[50px]">
        {[...Array<undefined>(8)].map((_, i) => (
          <div className={styles.dot} key={i}></div>
        ))}
      </div>
    </div>
  );
}
