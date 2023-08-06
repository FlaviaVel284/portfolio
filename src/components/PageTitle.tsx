import { ReactNode } from "react";
import styles from "./PageTitle.module.css";

interface PageTitleProps {
  children: ReactNode;
}
const PageTitle: React.FunctionComponent<PageTitleProps> = ({ children }) => {
  return (
    <>
      {" "}
      <div className={styles.title_container}>
        {" "}
        <img className={styles.start_curve} src="/images/curve_2.svg" />
        <div className={styles.title}>{children}</div>
      </div>
    </>
  );
};

export default PageTitle;
