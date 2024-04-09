import React from "react";
import styles from "../Transactions/Transactions.module.css";
import transactionsData from '../data/transactions.json';
import clsx from 'clsx';
import PropTypes from "prop-types";

function TransactionHistory({ items }) {
  return (

   <div className={clsx(styles.tableContainer)}>
      <table className={clsx(styles.transactionHistory)}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        
        <tbody className={clsx(styles.tbodyContainer)}>
          {transactionsData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TransactionHistory;
