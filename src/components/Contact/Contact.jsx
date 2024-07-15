import React from "react";
import "./Contact.css";

function Contact() {
   return (
      <div className="contact">
         <h1>Interested in delving deeper into the project?</h1>
         <p>
            If you'd like to explore further details about our initiatives or
            any of our affiliated brands, don't hesitate to connect. You can
            reach out to us via email at <span>hello@abc.com</span> or give us a
            call at <span>+91 480 20802730</span> .
         </p>
         <div className="btn">
            <button className="black">Ring us on Skype</button>
            <button className="white">Contact Us</button>
         </div>
      </div>
   );
}

export default Contact;
