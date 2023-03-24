import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    axios
      .get('https://type.fit/api/quotes')
      .then((response) => {
        setQuotes(response);
        console.log(response);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  return (
    <div id="container">
      <div id="quote-box">
        <div>Quote</div>
        <p>Author</p>
        <div>Footer</div>
      </div>
    </div>
  );
}

export default App;
