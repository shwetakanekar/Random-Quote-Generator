import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([{ text: '', author: '' }]);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    axios
      .get('https://type.fit/api/quotes')
      .then((response) => {
        setQuotes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  return (
    <div id="container">
      <div id="quote-box">
        <div id="text">
          <span>
            <i class="fa fa-solid fa-quote-left"></i>
          </span>
          {quotes[0].text}
        </div>
        <div id="author">- {quotes[0].author}</div>
        <div id="footer">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${quotes[0].text}"`}
          >
            <span>
              <i class="fa fa-brands fa-twitter"></i>
            </span>
          </a>
          <button id="new-quote">New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
