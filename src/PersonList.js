import React, { Component } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

class PersonList extends Component {
  state = {
    persons: [],
  };

  // Fetch data using Axios when the component mounts
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      console.log(res.data);
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <Container>
        <h1 className="text-center mt-4 mb-4" style={{ color: "green" }}>
          User List
        </h1>
        <Row>
          {this.state.persons.map((person, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card style={{ backgroundColor: "#00aaff", color: "white" }}>
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <Card.Img
                        variant="top"
                        src={person.picture.large}
                        alt="User"
                        style={{ borderRadius: "50%" }}
                      />
                    </Col>
                    <Col md={8}>
                      <Card.Title>
                        {person.name.title} {person.name.first}{" "}
                        {person.name.last}
                      </Card.Title>
                      <Card.Text>
                        <strong>User Name:</strong> {person.login.username}
                      </Card.Text>
                      <Card.Text>
                        <strong>Gender:</strong> {person.gender.toUpperCase()}
                      </Card.Text>
                      <Card.Text>
                        <strong>Time Zone Description:</strong>{" "}
                        {person.location.timezone.description}
                      </Card.Text>
                      <Card.Text>
                        <strong>Address:</strong>{" "}
                        {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}
                      </Card.Text>
                      <Card.Text>
                        <strong>Email:</strong> {person.email}
                      </Card.Text>
                      <Card.Text>
                        <strong>Birth Date and Age:</strong>{" "}
                        {`${person.dob.date.split("T")[0]} (${person.dob.age} years)`}
                      </Card.Text>
                      <Card.Text>
                        <strong>Register Date:</strong>{" "}
                        {person.registered.date.split("T")[0]}
                      </Card.Text>
                      <Card.Text>
                        <strong>Phone:</strong> {person.phone}
                      </Card.Text>
                      <Card.Text>
                        <strong>Cell:</strong> {person.cell}
                      </Card.Text>
                      <Button variant="primary">Details</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default PersonList;
