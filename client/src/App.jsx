import React from 'react';
import axios from 'axios';

const App = () => {

  axios.get('/api')
    .then(resp => console.log(123, resp));

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
