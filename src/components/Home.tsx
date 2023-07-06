import styles from "./Home.module.css";

const Home: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hello_text}>
        {" "}
        <h1>
          HELLO, I’M <br />
          FLAVIA VELCSOV
        </h1>
      </div>
    </div>
  );
};

export default Home;
