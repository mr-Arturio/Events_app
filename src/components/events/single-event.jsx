import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const SingleEvent = ({ data }) => {
  // A reference to the input field with the ID email 
  //useRef hook is used to access the input's value later.
  const inputEmail = useRef(); 
  //useRouter hook is used to access the Next.js router object.
  //allows the component to access the query parameters, such as id in the URL.
  const router = useRouter();
  //hook will be used to store and display messages to the user (e.g., validation errors or registration success messages).
  const [message, setMessage] = useState('');

  // function, which is called when the user submits the form
  const onSubmit = async (e) => {
    //prevents page refresh.
    e.preventDefault();
    //rerrive email input value from the 'ref'
    const emailValue = inputEmail.current.value;
    //The event ID is extracted from the router's query parameters.
    //The ? is used for optional chaining to avoid errors if the router.query object is not defined.
    const eventId = router?.query.id;

    // used to validate the email address format.
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Kindly provide a valid email address.');
    }

    //handles the email registration process
    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: { //specify that the content being sent is in JSON format
          'Content-Type': 'application/json',
        },
        //The data to be sent in the request body is an object containing email and eventId
        //which are extracted from the form input and the router, respectively.
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      //if fails
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      //The email input field is cleared after the successful registration or when an error occurs.
      inputEmail.current.value = '';
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p> {data.description} </p>
      <form onSubmit={onSubmit} className="email_registration">
        <label> Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Type your email here..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
