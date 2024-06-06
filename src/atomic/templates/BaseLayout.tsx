import styles from './BaseLayout.module.css'

type BaseLayoutProps = {
  header: JSX.Element
  playZone: JSX.Element
}

export const BaseLayout = (props: BaseLayoutProps) => {
  return <main className={styles.layout}>
    <header>
      {props.header}
    </header>

    <section>
      {props.playZone}
    </section>
  </main>
}
