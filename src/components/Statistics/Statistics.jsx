//import PropTypes from 'prop-types';
import stats from './data.json';
import style from './Statistics.module.css';

const title = "Upload stats";

export const Statistics = () => {
  
  return (
    <section className={style.statistics}>
      {title.length > 0 ? < h2 className={style.title}>{title}</h2> : null}
      <ul className={style.stat_list}>
        {stats.map(item => (
            <li key={item.id} className={style.item}>
              <span className={style.label}>{item.label}</span>
              <span className={style.percentage}>{item.percentage}</span>
            </li>
            )
          )
        }
      </ul>
    </section>
  );
};
