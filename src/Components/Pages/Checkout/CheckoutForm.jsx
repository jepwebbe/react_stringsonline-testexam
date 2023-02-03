import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// From from React Hook Form builder

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
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
    if (!emailRegex.test(value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  // Uses Axios to post the formdata from the state to Strapi
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    axios
      // posts to imaginative MailChimp account
      .post("http://mailchimp.us8.list-manage.com/subscribe/post", {
        data: formData,
      })
      .then((response) => {
        this.setState({});
        console.log(response.data);
      })

      .catch((error) => error);

    if (!data) return;
    navigate("/tak");
  };
  return (
    <form onSubmit={handleSubmit}>
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
