import React from 'react'
import Analytics from '../Components/Analytics'
import { useAuth } from '../store/auth'

function About() {
  const {user} = useAuth();
  return (
    <>
    <main>
    <section className="section-hero">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <p>Welcome {user ? `${user.username} To Our Website`:`To Our Website`}</p>
          <h1>Why Choose Us?</h1>
          <p>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>
          <p>Customization: We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.</p>
          <p>customer-centrci approach: We prioritize your satisfaction and provide to-notch support to address your IT concern.</p>
          <p>Affordability: We offer competitive pricing without compromising on the quality of our services.</p>
          <p>Reliability: Count on us to be there when you need us. We're commited to ensuring your IT environment is reliable and available 24/7.</p>
          <div className="btn btn-group">
            <a href="/contact"> <button className="btn">connect now</button> </a>
            <a href="/services"> <button className="btn secondary-btn">Learn more</button> </a>
          </div>
        </div>
 
      {/* Hero Section  */}

        <div className="hero-image">
          <img src="/about.png" alt="home image" width={400} height={500} />
        </div>       
      </div> 
    </section>
   </main>
   <Analytics/>
   </>
  )
}

export default About
