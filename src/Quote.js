import React, { useState } from "react";

const Quote = () => {
  const mathQuotes = [
    "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    "Together we can change the world, just one random act of kindness at a time.",
    "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
    "One faces the future with one's past.",
    "Cherish your human connections: your relationships with friends and family.",
    "True art is characterized by an irresistible urge in the creative artist.",
    "He is richest who is content with the least, for content is the wealth of nature.",
    "A sculptor is a person who is interested in the shape of things, a poet in words, a musician by sounds.",
    ];

  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * mathQuotes.length)
  );

  const handleShowAnotherQuote = () => {
    const newIndex = Math.floor(Math.random() * mathQuotes.length);
    setQuoteIndex(newIndex);
  };

  return (
    <main
      style={{
        display: "flex",
        minHeight: "90vh",
        flexDirection: "column",
        paddingLeft: "10%",
        paddingRight: "10%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Quote of the Day</h2>
      <p>{mathQuotes[quoteIndex]}</p>
      <button
        style={{
          width: "200px",
          height: "50px",
          fontSize: "15px",
          fontWeight: "bold",
          borderRadius: "20px",
          backgroundColor: "black",
          cursor: "pointer",
          color: "white",
        }}
        onClick={handleShowAnotherQuote}
      >
        Show Another Quote
      </button>
    </main>
  );
};

export default Quote;
