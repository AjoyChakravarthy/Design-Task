import React from "react";
import "./About.css";

function About() {
   return (
      <div className="about">
         <div className="top">
            <h1>Our Contribution</h1>
            <p>
               Our core offering extends beyond mere profit generation; we
               emphasize the growth and active involvement of our user
               community. Collaborating with us represents an investment, rather
               than a mere expenditure. Our dedication to providing distinctive
               digital interactions guarantees unparalleled benefits for our
               clientele.
            </p>
         </div>
         <div className="bottom">
            <div>
               <h1>5M</h1>
               <h3>Daily User Engagements</h3>
            </div>
            <div>
               <h1>$500K</h1>
               <h3>Revenue Surge for an Platform</h3>
            </div>
            <div>
               <h1>10X</h1>
               <h3>ROAS on all our marketing campaigns</h3>
            </div>
         </div>
      </div>
   );
}

export default About;
