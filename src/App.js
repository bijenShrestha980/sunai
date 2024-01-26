import { useState } from "react";

function App() {
  const [mystring, setMyString] = useState("");
  const [result, setResult] = useState("");

  function firstUniqChar(e) {
    e.preventDefault();
    for (let i = 0; i < mystring.length; i++) {
      if (mystring.indexOf(mystring[i]) === mystring.lastIndexOf(mystring[i])) {
        return i;
      }
    }
    return null;
  }

  window.onscroll = function (e) {
    // called when the window is scrolled.
    console.log(e);
  };

  return (
    <form onSubmit={(e) => setResult(firstUniqChar(e))}>
      <input type="text" onChange={(e) => setMyString(e.target.value)} />
      <button type="submit">Submit</button>
      <p>{result}</p>
    </form>
  );
}

export default App;
