import {useState} from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
}

function Contact() {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);
  const {user, API} = useAuth();

  if(userData && user){
    setContact({
      username: user.username,
      email: user.email,
      message:"",
    });

    setUserData(false);
  }

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault ();
    
   try {
     const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(contact)
     });
     if(response.ok){
      setContact(defaultContactFormData);
      const data = await response.json();
      console.log("Contact form data", data);
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
        <h1 className='main-heading'>Contact us</h1>
      </div>
      <div className="container grid grid-two-cols">
        <div className="contact-img">
          <img src="/support.png" alt="support image"/>
        </div>
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input type="text" name='username' id='username' autoComplete='off'value={contact.username} onChange={handleInput} required/>
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input type="email" name='email' id='email' autoComplete='off'value={contact.email} onChange={handleInput} required/>
            </div>
            <div>
              <label htmlFor="message">message</label>
              <textarea name="message" id="message" cols={30} rows={6} autoComplete='off'value={contact.message} onChange={handleInput} required></textarea>
            </div>
            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </section>
      </div>
<section className='mb-3'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.23257526685!2d80.3040785754372!3d26.480455478533003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39fdf60ab027%3A0x60349da918173cb9!2sParmath!5e0!3m2!1sen!2sin!4v1714919600913!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</section>

    </section>
  </>
  )
}

export default Contact
