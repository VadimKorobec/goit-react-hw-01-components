import { Profile } from '../Profile/Profile';
import user from 'components/Profile/user.json';
import { Statistics } from '../Statistics/Statistics';
import data from 'components/Statistics/data.json';
import { FriendList } from '../FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';
import { Container } from 'components/App/App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
