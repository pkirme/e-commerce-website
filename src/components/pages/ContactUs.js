import React from "react";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onDataSubmitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      phoneNumber,
    };

    const response = await fetch(
      "https://react-database-afa21-default-rtdb.firebaseio.com/UserData.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        header: { "Content-type": "application/json" },
      }
    );
    const fetchData = await response.json();
    console.log(fetchData);
    setName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <Form onSubmit={onDataSubmitHandler}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="userEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="userNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your contact number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your phone number with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
