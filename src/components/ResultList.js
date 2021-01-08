import React from 'react'

function ResultList(props) {
    return (
            <ul>
            {props.results.results.map((each, i) => {
                return (
                <li key={i}>
                    {each.name.first}

                </li>
            )})}
            </ul>

    )
}

export default ResultList
