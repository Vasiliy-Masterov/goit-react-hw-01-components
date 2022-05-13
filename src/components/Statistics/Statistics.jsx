//import PropTypes from 'prop-types';
import stats from './data.json';
import styles from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//function colorChange() {
    //const randomHexColor = getRandomHexColor();
    //bodyEl.style.backgroundColor = randomHexColor;   
//}   
  
const title = "Upload stats";

export const Statistics = () => {
  
  return (
    <section className={styles.statistics} >
      {title.length > 0 ? < h2 className={styles.title}>{title}</h2> : null}
      <ul className={styles.stat_list}>
        {stats.map(item => (
          <li key={item.id} className={styles.item} style={{ backgroundColor: `${getRandomHexColor()}` }}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}</span>
          </li>
            )
          )
        }
      </ul>
    </section>
  );
};
