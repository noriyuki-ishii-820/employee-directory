import React from 'react'
import Table from 'react-bootstrap/Table';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import "./ResultList.css"

function ResultList (props) {
    console.log(props)
    return (
        <div>
            <Table striped  hover className="root" >
                <thead>
                    <tr>
                        <th>Image</th>
                        <th className="column">Name <ArrowUpwardIcon className="icon" onClick={props.Descending}/> <ArrowDownwardIcon className="icon" onClick={props.Ascending}/></th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>Date of Birth(YYYY-MM-DD)</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map((each, i) =>
                        <tr kry={i}>
                            <td><img className="avatar" src={each.picture.large} alt="image" /></td>
                            <td>{each.name.first} {each.name.last}</td>
                            <td>{each.email}</td>
                            <td>{each.phone}</td>
                            <td>{each.dob.date.substring(0,10)}</td>
                        </tr>
                    )}
                </tbody>

            </Table>


        </div>

    )
}

export default ResultList
