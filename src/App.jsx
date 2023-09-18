import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import PersonasCard from './components/PersonasCards';
import getUsersApi from '../Apis/getUsersApi';
import Loader from './components/Loader';

function App() {
  const [userCard, setUserCard] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getUsersApi();
      if (!data) {
        setIsLoader(true);
      } else {
        setUserCard(data);
        setIsLoader(false);
      }
    };
    getData();
  }, []);

  // console.log(userCard);

  return (
    <Card>
      <Header />
      {isLoader ? <Loader /> : <PersonasCard data={userCard} />}
    </Card>
  );
}

export default App;
