import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css'
import contact from '../../../assets/logo/support.gif'



const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            'service_td8t0zz',
            'template_nkp9gsk'
            , form.current,
            'FEKkfa4lJxw-9G8Zu')

         .then(
            (result) => {
               console.log(result.text);
               console.log("message sent");
               e.target.reset()
            },
            (error) => {
               console.log(error.text);
            }
         );
   };

   return (
      <div className="contact-div md:w-8/12 px-3 mx-auto mt-28" style={{ height: '100vh' }}>
         <div className="flex flex-col lg:flex-row gap-10 justify-between">
            <img src={contact} alt="" className="video" />
            <div className="w-full">
               <h1 className="text-4xl font-bold text-red-600"> Contact with me</h1>
               <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
               </form>
            </div>

         </div>
      </div>
   );
};

export default Contact;

// Styles
