import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Statistic/StatisticData.module.css';

const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');


const Statistics  =({title, stats}) => (
  <section className={styles.statistics}>
  {title && <h2 className={styles.title}>{title}</h2>}

  <ul className={styles.stat_list}>
    {stats.map(({id, label, percentage}) => (
    <li 
    className={styles.item}
    key = {id}
    style = {{
      backgroundColor: randomColor(),
    }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
    ))}
  </ul>
</section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};

export default Statistics;