import PropTypes from 'prop-types';
import items from './transactions.json';
import styles from './Transaction-history.module.css';

export const TransactionHistory = () => {
  return (
    <table className={styles.transaction_history}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.head_item}>Type</th>
          <th className={styles.head_item}>Amount</th>
          <th className={styles.head_item}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.item}>
            <td className={styles.type}>{type}</td>
            <td className={styles.amount}>{amount}</td>
            <td className={styles.currency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
