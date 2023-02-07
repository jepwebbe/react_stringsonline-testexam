import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import env from "react-dotenv";
import { useNavigate } from "react-router-dom";
// From from React Hook Form builder

const CheckoutForm = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    zip: "",
    city: ""
  });
  // Updates the state whenever anything is written in the input field
  const [isValid, setIsValid] = useState(true);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
        // [name]: type === "checkbox" ? checked : value
      };
    });
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (name == "email") {
      if (!emailRegex.test(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  };

 // Uses emailJS to post the formdata from the useRef to Strapi
 const handleSubmit = (event) => {
  event.preventDefault();
  if (!isValid) {
    return;
  }
  emailjs
    .sendForm(
      env.SERVICE_ID,
      env.TEMPLATE_ID,
      formRef.current,
      env.PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
      navigate("/tak")
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <h3>Fakturerings- & leveringsadresse</h3>
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Fornavn"
          maxLength="80"
          required
        />
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Efternavn"
          maxLength="80"
          required
        />{" "}
        <input
          onChange={handleChange}
          type="text"
          name="address"
          value={formData.address}
          placeholder="Gade/vej og husnummer"
          required
        />
        <div className="address">
          <input
            onChange={handleChange}
            type="number"
            name="zip"
            value={formData.zip}
            placeholder="Postnummer"
            required
          />
          <input
            onChange={handleChange}
            type="text"
            name="city"
            value={formData.city}
            placeholder="By"
            required
          />
        </div>
      </div>
      <div>
        <h3>Email & telefon</h3>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={formData.email}
          placeholder="Emailadresse"
          required
        />
        {!isValid && <p>Indtast venligst en gyldig email-adresse</p>}
        <input
          onChange={handleChange}
          type="number"
          name="phone"
          value={formData.phone}
          placeholder="Telefonnummer"
          max-length="8"
          required
        />
      </div>
      <div>
        <h3>Betalingsmetode</h3>
      </div>
      <input className="submit" type="submit" value="Send" />
    </form>
  );
};
export default CheckoutForm;
