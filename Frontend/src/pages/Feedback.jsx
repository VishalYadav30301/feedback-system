import React from 'react'
import {useState} from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const defaultFeedbackFormData = {
  username: "",
  email: "",
  feedback: "",
}


function Feedback() {

  const [feedback, setFeedback] = useState(defaultFeedbackFormData);
  const [userData, setUserData] = useState(true);
  const {user, API} = useAuth();

  if(userData && user){
    setFeedback({
      username: user.username,
      email: user.email,
      feedback:"",
    });

    setUserData(false);
  }

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setFeedback({
      ...feedback,
      [name]: value,
    })
  }


  const handleSubmit = async(e) =>{
    e.preventDefault ();
    
   try {
     const response = await fetch(`${API}/api/feedbackform/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(feedback)
     });
     if(response.ok){
      setFeedback(defaultFeedbackFormData);
      const data = await response.json();
      console.log("Feedback form data", data);
      toast.success("Message sent succesfully");
     }else{
      toast.error("Message not sent");
     }
   } catch (error) {
    console.log(error)
   }

  }

  return (
      <>
        <section className="section-contact">
      <div className="contact-content container">
        <h1 className='main-heading'>Feedback Me</h1>
      </div>
      <div className="container grid grid-two-cols">
        <div className="contact-img">
          <img src="/support.png" alt="support image"/>
        </div>
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input type="text" name='username' id='username' autoComplete='off'value={feedback.username} onChange={handleInput} required/>
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input type="email" name='email' id='email' autoComplete='off'value={feedback.email} onChange={handleInput} required/>
            </div>
            <div>
              <label htmlFor="message">feedback</label>
              <textarea name="feedback" id="message" cols={30} rows={6} autoComplete='off'value={feedback.message} onChange={handleInput} required></textarea>
            </div>
            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </section>
      </div>
      </section>
      </>
  )
}

export default Feedback
