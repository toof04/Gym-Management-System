import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const content=()=>{
  return(
    <section>
    hi
    </section>
  );
  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <content>
  </React.StrictMode>
);

