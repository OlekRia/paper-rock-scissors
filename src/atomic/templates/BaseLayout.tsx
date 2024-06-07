import styles from './BaseLayout.module.css'

type BaseLayoutProps = {
  header: JSX.Element
  playZone: JSX.Element
}

export const BaseLayout = (props: BaseLayoutProps) => {
  return <main className={styles.Layout}>
    <header className={styles.Header}>
      {props.header}
    </header>

    <section className={styles.Section}>
      {props.playZone}
    </section>
  </main>
}
