import Profile from "./components/User/Profile";
import Statistics from "./components/Statistic/StatisticData";
import FriendList from "./components/FriendList/FriendsList";
import TransactionHistory from "./components/TransactionHistory/Transaction";
import user from "./json/user.json";
import statisticalData from "./json/statistical-data.json";
import friends from "./json/friends.json";
import transactions from "./json/transactions.json";


const App = () => {
return (
<div>
  <Profile 
    name={user.name} 
    tag={user.tag} 
    location={user.location} 
    avatar={user.avatar} 
    stats={user.stats} />
  <Statistics title="Upload stats" stats={statisticalData} />
  {/* <Statistics stats={statisticalData} /> */}
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} />
</div>
);
};

export default App;