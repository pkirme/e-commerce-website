import React from "react";
import { Table, Button, Container } from "react-bootstrap";

const HomeContent = () => {
  const content = [
    {
      date: "JUL16",
      name: "DETROIT, MI",
      description: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL19",
      name: "TORONTO,ON",
      description: "BUDWEISER STAGE",
    },
    {
      date: "JUL22",
      name: "BRISTOW, VA",
      description: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL29",
      name: "PHOENIX, AZ",
      description: "AK-CHIN PAVILION",
    },
    {
      date: "AUG2",
      name: "LAS VEGAS, NV",
      description: "T-MOBILE ARENA",
    },
    {
      date: "AUG7",
      name: "CONCORD, CA",
      description: "CONCORD PAVILION",
    },
  ];

  return (
    <Container>
      <Table style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {content.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="primary" onClick="">
                  Buy Tickets
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default HomeContent;
