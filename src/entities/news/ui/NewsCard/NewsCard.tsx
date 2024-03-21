import { formateTimeAgo } from "@/shared/helpers/formateTimeAgo";
import styles from "./newscard.module.css";
import { INews } from "@/entities/news/modal/types";
import Image from "@/shared/ui/Image/Image";

interface Props {
  item: INews;
  type:'banner' | 'item'
}

const NewsCard = ({item, type = 'item'}: Props) => {
  return (
    <li className={`${styles.card} ${type === 'banner' && styles.banner}`}>
      {type === 'banner' ? <Image image={item?.image} /> :
      <div
        className={styles.wrapper}
        style={{backgroundImage: `url(${item?.image})`}}
      ></div>
      }

      <div className={styles.info}>
        <h3 className={styles.title}>{item?.title}</h3>
        <p className={styles.extra}>
          {formateTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsCard;