import React from 'react'

function Display({days,hours,minutes,seconds}) {
    return (
        <div>
            <h1>SALES COUNTOWN TIMER</h1>
            <h2>Offer ends in </h2>
            <table>
                <tbody>
                <tr>
                    <th>{days}</th>
                    <th>{hours}</th>
                    <th>{minutes}</th>
                    <th>{seconds}</th>
                </tr>
                <tr>
                     <th>Days</th>
                    <th>Hours</th>
                    <th>Minutes</th>
                    <th>Seconds</th>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Display;
