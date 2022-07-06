import styles from "../../../../styles/Home.module.css";

type Props = {
  children: React.ReactNode;
};

const Page: React.FC<Props> = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Page;
