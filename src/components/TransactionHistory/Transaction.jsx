import React from 'react';
import PropTypes from 'prop-types';
import styles from '../TransactionHistory/Transaction.module.css';

const TransactionHistory = ({items}) =>(
<table className={styles.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    ))}
  </tbody>
</table>
);

TransactionHistory.propTypes = {
  type: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default TransactionHistory;