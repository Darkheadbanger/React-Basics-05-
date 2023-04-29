import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Contact from './components/Contact.js';

export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <Contact
      name="Emmanuelle"
      email="📧emmanuel@email.com"
      phone="📞234234234"
    />
    <Contact name="David" email="📧david@email.com" phone="📞666" />
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
