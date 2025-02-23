
import styles from "./Banner.module.css";
import bannerImage from "../assets/banner.jpg";

const Banner = () => {
  return <img src={bannerImage} alt="Banner" className={styles.banner} />;
};

export default Banner;
