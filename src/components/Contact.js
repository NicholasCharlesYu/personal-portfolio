import { Col, Row, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";
import { useState } from "react";

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "95603e7e-2feb-4d1e-894b-4fc862e7f316");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col lg={6} className="contact-image-wrapper">
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col lg={6}>
            <h2>Get In Touch</h2>
            <form name="contact" onSubmit={onSubmit}>
              <Row>
                <input type="hidden" name="form-name" value="contact" />
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" name="lastname" placeholder="Last Name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Adress"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </Col>
                <Col>
                  <textarea
                    required
                    row="6"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                  <button type="submit">
                    <span>Submit</span>
                  </button>
                </Col>
              </Row>
            </form>
            <Col>
              <span>{result}</span>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
