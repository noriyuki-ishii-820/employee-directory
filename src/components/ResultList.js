import React from 'react'
import "./ResultList.css"
import Table from 'react-bootstrap/Table';

function ResultList (props) {

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map((each, i) =>
                        <tr kry={i}>
                            <td><img src={each.picture.medium} alt="image" /></td>
                            <td>{each.name.first}</td>
                            <td>{each.name.last}</td>
                            <td>{each.email}</td>
                            <td>{each.dob.date}</td>
                        </tr>
                    )}
                </tbody>

            </Table>


        </div>

    )
}

export default ResultList
