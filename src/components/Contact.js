import React from 'react';

let props = {
  name: '',
  email: '',
  phone: '',
};

let Contacts = (props) => {
  return (
    <div className="friend-item">
      <div className="contact-info">
        <h3>{props.name}</h3>
        <h4>
          {props.email}
          <br />
        </h4>
        <h4> {props.phone}</h4>
      </div>
      <button>Delete</button>
    </div>
  );
};

Contacts(props);

export default Contacts;
