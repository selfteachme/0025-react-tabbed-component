import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import { Tabs } from "../components/Tabs";

export default function Home({ query }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Tabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Tabs initialTab={query}>
          <div label="Tab 1">
            <h2>Tab 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div label="Tab 2">
            <h2>Tab 2</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div label="Tab 3">
            <h2>Tab 3</h2>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Tabs>
      </main>
    </div>
  );
}

Home.getInitialProps = ({ query }) => {
  return { query };
};
