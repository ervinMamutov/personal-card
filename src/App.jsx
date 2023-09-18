import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import PersonasCard from './components/PersonasCards';
import getUsersApi from '../Apis/getUsersApi';
import { useEffect, useState } from 'react';

function App() {
  const [userCard, setUserCard] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getUsersApi();
      setUserCard(data);
    };
    getData();
  }, []);

  // console.log(userCard);

  return (
    <Card>
      <Header />
      <PersonasCard data={userCard} />
    </Card>
  );
}

export default App;
