import { Profile } from './Social-profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
