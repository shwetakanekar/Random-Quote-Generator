import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([{ text: '', author: '' }]);
  const [quoteId, setQuoteId] = useState(0);
  const [quoteColor, setQuoteColor] = useState('tomato');

  let bgColor = {
    backgroundColor: quoteColor,
  };

  let color = {
    color: quoteColor,
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    axios
      .get('https://type.fit/api/quotes')
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((error) => {
        console.log('Error: ', error);
        alert('An error occured while getting the quotes.');
      });
  };

  const handleNewQuote = () => {
    // select a random quote from quotes array
    let newId = Math.floor(Math.random() * quotes.length);
    setQuoteId(newId);

    // select a random color from set of colors below
    const colorSet = [
      'green',
      'navy',
      'crimson',
      'darkmagenta',
      'lightseagreen',
      'brown',
      'coral',
      'hotpink',
      'royalblue',
      'tomato',
      'teal',
      'deepskyblue',
      'deeppink',
      'greenyellow',
      'peru',
      'limegreen',
    ];
    let colorId = Math.floor(Math.random() * colorSet.length);
    setQuoteColor(colorSet[colorId]);
  };

  return (
    <div id="container" style={bgColor}>
      <div id="quote-box" style={color}>
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
            style={bgColor}
          >
            <span>
              <i className="fa fa-brands fa-twitter"></i>
            </span>
          </a>
          <button id="new-quote" onClick={handleNewQuote} style={bgColor}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
