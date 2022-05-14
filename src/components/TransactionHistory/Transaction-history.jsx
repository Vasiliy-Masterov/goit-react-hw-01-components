//import PropTypes from 'prop-types';
import items from './transactions.json';
import styles from './Transaction-history.module.css';

export const TransactionHistory = () => {
    
  
    return (
    <table className={styles.transaction_history}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.head_type} >Type</th>
          <th className={styles.head_amount} >Amount</th>
          <th className={styles.head_currency} >Currency</th>
        </tr>
      </thead>

            <tbody>
                {items.map(item => (
                  <tr key={item.id} className={styles.item}>
          <td className={styles.type} >{item.type}</td>
          <td className={styles.amount} >{item.amount}</td>
          <td className={styles.currency}>{item.currency}</td>
        </tr>  
                ))}
        
      </tbody>
    </table>
  );
};
