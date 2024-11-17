import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

class PersonList extends Component {
    state = {
        persons: [],
    };

    // Component Lifecycle Callback
    componentDidMount() {
        axios
            .get(`https://randomuser.me/api/?results=10`)
            .then((res) => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <div className="container mt-4">
                <h2>Person List</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persons.map((person, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{`${person.name.first} ${person.name.last}`}</td>
                                <td>{person.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default PersonList;
