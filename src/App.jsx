import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([{ text: '', author: '' }]);
  const [quoteId, setQuoteId] = useState(0);

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

  const handleNewQuote = () => {
    let newId = Math.floor(Math.random() * quotes.length);
    console.log(newId);
    setQuoteId(newId);
  };

  return (
    <div id="container">
      <div id="quote-box">
        <div id="text">
          <span>
            <i className="fa fa-solid fa-quote-left"></i>
          </span>
          {quotes[quoteId].text}
        </div>
        <div id="author">
          - {quotes[quoteId].author ? quotes[quoteId].author : 'Anonymous'}
        </div>
        <div id="footer">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${quotes[quoteId].text}"`}
          >
            <span>
              <i className="fa fa-brands fa-twitter"></i>
            </span>
          </a>
          <button id="new-quote" onClick={handleNewQuote}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
