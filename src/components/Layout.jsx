import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    
      <div className={styles.contentBox}>
        <header className={styles.header}>
          <h1>Nos envie um feedback</h1>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          &copy; 2025 Pós-Graduação Infnet
        </footer>
      </div>
  );
};

export default Layout;
