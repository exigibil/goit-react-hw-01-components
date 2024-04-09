import React from 'react';
import styles from './Statistics.module.css';
import data from '../data/data.json';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function Statistics({ ids }) {
  const filteredData = data.filter(item => ids.includes(item.id));

  return (
    <section className={clsx(styles.statistics)}>
      <h2 className={clsx(styles.title)}>Upload stats</h2>
      <ul className={clsx(styles.statlist)}>
        {filteredData.map((item, index) => (
          <li key={index} className={clsx(styles.item)}>
            <span className={clsx(styles.label)}>{item.label}</span>
            <span className={clsx(styles.percentage)}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Statistics;
